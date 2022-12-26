export interface Recruitment {
    id: number,
    title: string,
    content: string,
    position: string,
    career: string,
    employmentPattern: string,
    workingArea: string
}

export interface RecruitmentInfo {
  positionList: string[],
  careerList: string[],
  patternList: string[]
}
