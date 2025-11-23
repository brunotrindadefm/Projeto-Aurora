import BaseApi from "./baseApi.js";

class HistoricoApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/historico");
  }

}

export default new HistoricoApi();