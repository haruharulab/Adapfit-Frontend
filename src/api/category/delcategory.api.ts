import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class delcategory {
  public async delCategory() {
    const { data } = await customAxios.delete("category/1");
    return data;
  }
}

export default new delcategory();
