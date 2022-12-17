import axios from "axios";
import { customAxios } from "../../../lib/axios/customaxios";

class Logout {
  public async logOut() {
    const { data } = await customAxios.delete("super/auth");
    return data;
  }
}

export default new Logout();
