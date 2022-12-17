import axios from "axios";
import { customAxios } from "../../../lib/axios/customaxios";

class login {
  public async login(req: any) {
    const { data } = await customAxios.post("super/auth/token", {
      authId: req.authId,
      password: req.password,
    });
    return data;
  }
}

export default new login();
