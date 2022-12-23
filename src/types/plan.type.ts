export interface Plan {
  planId: number,
  title: string,
  subTitle: string,
  content: string,
  thumbnail: string,
  category: PlanCategory,
  writerId: number
}

export interface PlanCategory {
  categoryId: number,
  name: string
}
