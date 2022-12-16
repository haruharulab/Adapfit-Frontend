import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

export default function posResume(formData: any) {
  customAxios
    .post("resume", formData)
    .then(() => alert("지원 완료!!"))
    .catch((e) => {
      alert(e);
    });
}
