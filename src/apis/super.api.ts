import { customAxios } from "../axios/axios";
import { Banner } from "../../src/types/banner.type";
import { Plan, PlanCategory } from "../types/plan.type";
import { Admin } from "../types/user.type";

export const getUser = async (): Promise<Admin[]> => {
  return (await customAxios.get("/super/all")).data;
};
