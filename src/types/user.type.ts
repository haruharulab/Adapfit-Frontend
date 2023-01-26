export enum Authority {
  LOADING = "LOADING",
  NO_LOGIN = "NO_LOGIN",
  HUMAN_RESOURCES_ADMIN = "HUMAN_RESOURCES_ADMIN",
  CENTER_ADMIN = "CENTER_ADMIN",
  ADAPFIT_ADMIN = "ADAPFIT_ADMIN",
  ROOT = "ROOT",
}

export enum AdminLevel {
  "HUMAN_RESOURCES_ADMIN" = 1,
  "CENTER_ADMIN" = 2,
  "ADAPFIT_ADMIN" = 3,
  "ROOT" = 4,
}

export enum AdminName {
  "HUMAN_RESOURCES_ADMIN" = "인사 담당",
  "CENTER_ADMIN" = "센터 관리자",
  "ADAPFIT_ADMIN" = "관리자",
  "ROOT" = "슈퍼 관리자",
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
  authority: Authority;
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
