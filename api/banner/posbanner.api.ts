import axios from "axios";
import { customAxios } from "../../lib/axios/customaxios";

class posbanner {
  public async posbanner(req: any) {
    const { data } = await customAxios.post("banner", {
      link: req.link,
      image: req.image,
    });
    return data;
  }
}

export default new posbanner();
