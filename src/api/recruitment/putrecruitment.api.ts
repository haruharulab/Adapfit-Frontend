import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class putrecruitment {
  public async putRecruitment(req: any) {
    const { data } = await customAxios.put("recruitment/3", {
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

export default new putrecruitment();
