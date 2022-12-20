import { customAxios } from "../axios/axios";
import { Banner } from "../../src/types/banner.type";
import { Plan, PlanCategory } from "../types/plan.type";
import { Admin } from "../types/user.type";
type putData = {
  authId: string;
  email: string;
  nickname: string;
  phoneNumber: string;
};
export const getUser = async (): Promise<Admin[]> => {
  return (await customAxios.get("/super/all")).data;
};

export const putAdmin = async (id: any, data: putData) => {
  await customAxios.put(`super/${id}`, data);
};
export const getAdmin = async (id: any) => {
  return (await customAxios.get(`super/${id}`)).data;
};
