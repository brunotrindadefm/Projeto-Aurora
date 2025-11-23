import BaseApi from "./baseApi.js";

class DedicacaoApi extends BaseApi {
  constructor() {
    super("/api/dedicacao");
  }

}

export default new DedicacaoApi();