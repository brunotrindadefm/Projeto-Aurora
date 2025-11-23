import BaseApi from "./baseApi.js";

class DepartamentoApi extends BaseApi {
  constructor() {
    super("/api/departamento");
  }

}

export default new DepartamentoApi();