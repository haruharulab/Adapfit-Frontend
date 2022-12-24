export interface Recruitment {
    id: number,
    title: string,
    content: string,
    jobGroup: string,
    career: number,
    employmentPattern: string,
    workingArea: string
}

export interface RecruitmentInfo {
  positionList: string[],
  careerList: string[],
  patternList: string[]
}
