export enum Authority {
  LOADING = "LOADING",
  NO_LOGIN = "NO_LOGIN",
  ADMIN = "ADMIN",
  ROOT = "ROOT",
}

export type UserType = LoadingUser | NoLoginUser | Admin | SuperAdmin;

export interface LoadingUser {
  authority: Authority.LOADING;
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
  center: string;
}

export interface SuperAdmin {
  superAdminId: number;
  authId: string;
  email: string;
  phoneNumber: number;
  authority: Authority.ROOT;
  createdAt: string;
  nickname: string;
}
