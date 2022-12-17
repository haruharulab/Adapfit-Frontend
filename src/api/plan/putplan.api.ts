import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class putplan {
  public async putPlan(req: any) {
    const { data } = await customAxios.put("plan/13", {
      title: req.title,
      context: req.context,
    });
    return data;
  }
}

export default new putplan();
