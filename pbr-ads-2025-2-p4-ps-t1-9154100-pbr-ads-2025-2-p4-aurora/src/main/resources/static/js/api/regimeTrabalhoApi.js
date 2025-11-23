import BaseApi from "./baseApi.js";

class RegimeTrabalhoApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/regime-trabalho");
  }

}

export default new RegimeTrabalhoApi();