import { Plan } from "./plan.type";

export enum Authority {
  NO_LOGIN = "NO_LOGIN",
  ADMIN = "ADMIN",
  ROOT = "ROOT",
}

export interface NoLoginUser {
  authority: Authority.NO_LOGIN;
}

export interface Admin {
  userId: number;
  authId: string;
  email: string;
  phoneNumber: string;
  nickname: string;
  authority: Authority.ADMIN;
  plans: Plan[];
  centerInfo: string;
}

export interface SuperAdmin {
  superAdminId: number;
  email: string;
  phoneNumber: number;
  authority: Authority.ROOT;
  createdAt: string;
  nickname: string;
}
