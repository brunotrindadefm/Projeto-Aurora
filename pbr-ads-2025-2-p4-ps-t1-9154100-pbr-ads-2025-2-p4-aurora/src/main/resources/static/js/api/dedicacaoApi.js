import BaseApi from "./baseApi.js";

class DedicacaoApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/dedicacao");
  }

}

export default new DedicacaoApi();