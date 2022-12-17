import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class posresume {
  public async posResume(req: any, file: any) {
    const { data } = await customAxios.post("resume", {
      recruitmentId: req.recruitmentId,
      name: req.name,
      email: req.email,
      phoneNumber: req.phoneNumber,
    });
  }
}
