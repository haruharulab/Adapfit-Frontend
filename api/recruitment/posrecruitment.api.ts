import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class posrecuritment {
  public async posRecuritmentment(req: any) {
    const { data } = await customAxios.post("recruitment", {
      title: req.title,
      content: req.content,
      group: req.group,
      career: req.career,
      employmentPattern: req.employmentPattern,
      workingArea: req.workingArea,
    });
    return data;
  }
}

export default new posrecuritment();
