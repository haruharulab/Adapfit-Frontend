import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class getUser {
  public async getMyUser() {
    const { data } = await customAxios.get("user");
    return data;
  }
}

export default new getUser();
