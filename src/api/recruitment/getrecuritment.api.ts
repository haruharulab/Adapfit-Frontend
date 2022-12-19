import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class getrecruitment {
  public async getRecuritment(req: any) {
    const { data } = await customAxios.get(
      `recruitment?position=${req.position}&career=${req.career}&employmentPattern=${req.employmentPattern}`
    );
    return data;
  }
}

export default new getrecruitment();
