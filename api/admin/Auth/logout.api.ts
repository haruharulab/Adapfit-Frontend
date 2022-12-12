import axios from "axios";
import { customAxios } from "../../../lib/axios/customaxios";

class Logout {
  public async logOut() {
    const { data } = await customAxios.delete("auth");
    return data;
  }
}

export default new Logout();
