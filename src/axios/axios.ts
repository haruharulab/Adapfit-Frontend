import axios from "axios";
import config from "../shared/config.json";

export const customAxios = axios.create({
  baseURL: config.BASEURL
});
