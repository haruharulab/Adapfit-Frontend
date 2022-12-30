import { Recruitment } from "./recruitment.type"

export interface Resume {
    resumeId: number,
    position: string,
    name: string,
    createdAt: string,
    saw: boolean
}

export interface DetailResumeType extends Resume {
    email: string,
    phoneNumber: number,
    recruitment: Recruitment,
    resume: string,
    portFolio: string,
    etcFile: string
}