import axios from "axios";
import { customAxios } from "../../../lib/axios/customaxios";

class Login {
  public async Login(req: any) {
    const { data } = await customAxios.post("auth/token", {
      authId: req.authId,
      password: req.password,
    });
    return data;
  }
}

export default new Login();
