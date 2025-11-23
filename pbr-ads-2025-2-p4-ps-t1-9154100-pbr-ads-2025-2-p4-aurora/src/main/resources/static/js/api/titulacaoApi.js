import BaseApi from "./baseApi.js";

class TitulacaoApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/titulacao");
  }

}

export default new TitulacaoApi();