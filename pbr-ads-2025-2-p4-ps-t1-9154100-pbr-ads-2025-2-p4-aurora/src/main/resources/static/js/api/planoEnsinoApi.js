import BaseApi from "./baseApi.js";

class PlanoEnsinoApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/plano-ensino");
  }

}

export default new PlanoEnsinoApi();