import axios from "axios";
import { customAxios } from "../../../lib/axios/customaxios";

class reToken {
  public async reToken(req: any) {
    const { data } = await customAxios.put("auth/refresh", {});
    return data;
  }
}

export default new reToken();
