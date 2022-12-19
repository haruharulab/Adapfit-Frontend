import { customAxios } from "../axios/axios";
import { Banner } from "../../src/types/banner.type";
import { Plan, PlanCategory } from "../types/plan.type";

export const getBannerList = async (): Promise<Banner[]> => {
  return (await customAxios.get("banner")).data;
};
export const getCategoryList = async () => {
  return await (
    await customAxios.get("category")
  ).data;
};
