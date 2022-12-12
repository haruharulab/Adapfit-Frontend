import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class getbanner {
  public async getBanner() {
    const { data } = await customAxios.get("banner");
    return data;
  }
}

export default new getbanner();
