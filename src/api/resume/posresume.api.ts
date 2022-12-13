import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

export default function posResume(formData: any) {
    customAxios.post('resume', formData, {headers: {
      'Content-Type': 'multipart/form-data'
    }})
        .then(()=>alert("지원 완료!!"))
        .catch((e)=>{alert(e)})
}