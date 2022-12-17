import { atom } from "recoil";
import { Admin, Authority, NoLoginUser } from "../types/user.type";
import { localStorageEffect, LocalStorageType } from "../utils/localStorage";

export const userState = atom<NoLoginUser | Admin>({
  key: "user",
  default: {
    authority: Authority.NO_LOGIN,
  },
});

export interface Token {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface TokenRes {
  accessToken: string;
  refreshToken: string;
  expiredAt: string;
}

export const tokenState = atom<Token>({
  key: "token",
  default: {
    accessToken: null,
    refreshToken: null,
  },
  effects: [
    localStorageEffect({
      key: "token",
      type: LocalStorageType.json,
      defaultValue: {
        accessToken: null,
        refreshToken: null,
      },
    }),
  ],
});
