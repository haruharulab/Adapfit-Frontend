import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class getAllUser {
  public async getAllUser() {
    const { data } = await customAxios.get("super");
    return data;
  }
}

export default new getAllUser();
