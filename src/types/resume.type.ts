import { Recruitment } from "./recruitment.type"

export interface Resume {
    resumeId: number,
    recruitmentId: number,
    position: string,
    name: string,
    createdAt: string,
    saw: boolean
}

export interface DetailResume extends Resume {
    email: string,
    recruitment: Recruitment;
}