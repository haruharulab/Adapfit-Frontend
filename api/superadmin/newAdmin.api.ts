import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class newAdmin {
  public async newAdmin(req: any) {
    const { data } = await customAxios.post("super", {
      authId: req.authId,
      password: req.password,
      vaildatePassword: req.vaildatePassword,
      email: req.email,
      nickname: req.nickname,
    });
    return data;
  }
}

export default new newAdmin();
