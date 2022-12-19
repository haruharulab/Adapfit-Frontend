export interface Plan {
  planId: number,
  title: string,
  content: string,
  thumbnail: string,
  images: {
    imageId: number,
    imageName: string,
    imageUrl: string,
  }[],
  category: PlanCategory,
  writerId: number
}

export interface PlanCategory {
  categoryId: number,
  name: string
}
