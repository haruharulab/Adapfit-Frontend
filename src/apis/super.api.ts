import { customAxios } from "../axios/axios";
import { Banner } from "../../src/types/banner.type";
import { Plan, PlanCategory } from "../types/plan.type";
import { Admin } from "../types/user.type";
type putData = {
  authId: string;
  password: string;
  email: string;
  nickname: string;
  phoneNumber: string;
  centerInfo: string;
};
export const getUser = async (): Promise<Admin[]> => {
  return (await customAxios.get("/super/all")).data;
};

export const putAdmin = async (id: any, data: putData) => {
  await customAxios.post(`super/${id}`, data);
};
