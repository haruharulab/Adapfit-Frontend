export interface Plan {
  planId: number;
  title: string;
  content: string;
  thumbnail: string;
  images: {
    image: string;
  }[];
  category: PlanCategory;
  writerId: number;
}

export interface PlanCategory {
  categoryId: number;
  name: string;
}
