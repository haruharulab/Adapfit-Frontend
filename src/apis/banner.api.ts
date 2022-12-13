import { customAxios } from "../axios/axios";
import { Banner } from "../../src/types/banner.type";

export const getBannerList = async (): Promise<Banner[]> => {
    return (await customAxios.get("banner")).data;
}