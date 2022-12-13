import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class delplan {
  public async delPlan(req: any) {
    const { data } = await customAxios.delete("plan/30");
    return data;
  }
}

export default new delplan();
