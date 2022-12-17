import axios from "axios";
import { customAxios } from "../../../lib/axios/customaxios";

class posroom {
  public async posRoom() {
    const { data } = await customAxios.post("room");
    return data;
  }
}

export default new posroom();
