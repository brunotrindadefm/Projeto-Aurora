import BaseApi from "./baseApi.js";

class HistoricoApi extends BaseApi {
  constructor() {
    super("/api/historico");
  }

}

export default new HistoricoApi();