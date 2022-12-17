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
    authority: Authority.ADMIN
}