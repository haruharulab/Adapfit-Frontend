import { Plan } from "./plan.type";

export enum Authority {
    NO_LOGIN = 'NO_LOGIN',
    ADMIN = 'ADMIN',
    SUPER_ADMIN = 'SUPER_ADMIN'
}

export interface NoLoginUser {
    authority: Authority.NO_LOGIN,
}

export interface Admin {
    userId: number,
    email: string,
    phoneNumber: number,
    authority: Authority.ADMIN,
    plans: Plan[]
}

export interface SuperAdmin {
    superAdminId: number,
    email: string,
    phoneNumber: number,
    authority: Authority.SUPER_ADMIN,
    createdAt: string,
    nickname: string
}
