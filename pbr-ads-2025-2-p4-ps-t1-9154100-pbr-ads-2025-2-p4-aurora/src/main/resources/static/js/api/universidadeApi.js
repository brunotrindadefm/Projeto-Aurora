import BaseApi from "./baseApi.js";

class UniversidadeApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/universidade");
  }

}

export default new UniversidadeApi();