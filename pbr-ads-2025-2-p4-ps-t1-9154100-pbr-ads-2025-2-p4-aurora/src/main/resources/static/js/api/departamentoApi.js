import BaseApi from "./baseApi.js";

class DepartamentoApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/departamento");
  }

}

export default new DepartamentoApi();