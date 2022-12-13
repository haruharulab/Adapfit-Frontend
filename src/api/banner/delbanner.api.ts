import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class delbanner {
  public async Delbanner() {
    const { data } = await customAxios.delete("banner/1");
    return data;
  }
}

export default new delbanner();
