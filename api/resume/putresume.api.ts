import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class putresume {
  public async putResume(req: any, file: any) {
    const { data } = await customAxios.put("resume", {
      recruitmentId: req.recruitmentId,
      name: req.name,
      email: req.email,
      phoneNumber: req.phoneNumber,
    });
  }
}
