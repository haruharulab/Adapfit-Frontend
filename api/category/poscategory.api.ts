import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class poscategory {
  public async posCategory(req: any) {
    const { data } = await customAxios.post(`category?name=${req.name}`, {});
    return data;
  }
}

export default new poscategory();
