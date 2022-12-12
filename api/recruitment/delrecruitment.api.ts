import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class delrecruitment {
  public async delRecruitment() {
    const { data } = await customAxios.delete("recruitment/2");
    return data;
  }
}

export default new delrecruitment();
