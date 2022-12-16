import { customAxios } from "../axios/axios";
import { Plan } from "../types/plan.type";

export const getPlanList = async (): Promise<Plan[]> => {
    return (await customAxios.get("plan")).data;
}