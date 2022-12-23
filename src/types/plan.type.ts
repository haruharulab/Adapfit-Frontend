export interface Plan {
  planId: number,
  title: string,
  subTitle: string,
  content: string,
  thumbnail: string,
  images: PlanImage[],
  category: PlanCategory,
  writerId: number
}

export interface PlanCategory {
  categoryId: number,
  name: string
}

export interface PlanImage {
  imageId?: number,
  imageName?: string,
  imageUrl?: string,
  imageFile?: File | null
}
