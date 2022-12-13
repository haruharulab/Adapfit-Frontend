import axios from "axios";
import { customAxios } from "../../../lib/axios/customaxios";

class signIn {
  public async signIn(req: any) {
    const { data } = await customAxios.post("user", {
      authId: req.authId,
      password: req.password,
      vaildatePassword: req.vaildatePassword,
      email: req.email,
      nickname: req.nickname,
      phoneNumber: req.phoneNumber,
    });
    return data;
  }
}
export default new signIn();
