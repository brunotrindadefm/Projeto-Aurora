import BaseApi from "./baseApi.js";

class UniversidadeApi extends BaseApi {
  constructor() {
    super("/api/universidade");
  }

}

export default new UniversidadeApi();