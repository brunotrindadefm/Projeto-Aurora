import BaseApi from "./baseApi.js";

class PlanoEnsinoApi extends BaseApi {
  constructor() {
    super("/api/plano-ensino");
  }

}

export default new PlanoEnsinoApi();