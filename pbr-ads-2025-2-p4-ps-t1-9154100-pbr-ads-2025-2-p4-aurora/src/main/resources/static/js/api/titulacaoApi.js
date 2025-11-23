import BaseApi from "./baseApi.js";

class TitulacaoApi extends BaseApi {
  constructor() {
    super("/api/titulacao");
  }

}

export default new TitulacaoApi();