import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class getplan {
  public async getPlan(req: any) {
    const { data } = await customAxios.post(
      `/plan?categoryId=${req.categoryId}`,
      {
        title: req.title,
        context: req.context,
      }
    );
    return data;
  }
}

export default new getplan();
