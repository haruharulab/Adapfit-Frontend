import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class putcategory {
  public async putCategory(req: any) {
    const { data } = await customAxios.put(`category/1?name=${req.name}`, {});
    return data;
  }
}

export default new putcategory();
