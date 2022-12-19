import { customAxios } from "../axios/axios";
import { Plan, PlanCategory } from "../types/plan.type";

export const getPlan = async (id: number): Promise<Plan> => {
    return (await customAxios.get(`plan/${id}`)).data;
}

export const getPlanList = async (): Promise<Plan[]> => {
    return (await customAxios.get("plan")).data;
}

export const getPlanCategoryList = async (): Promise<PlanCategory[]> => {
    return (await customAxios.get("category")).data;
}