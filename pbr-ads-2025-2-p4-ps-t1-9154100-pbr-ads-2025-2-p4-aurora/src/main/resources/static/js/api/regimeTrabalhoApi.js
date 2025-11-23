import BaseApi from "./baseApi.js";

class RegimeTrabalhoApi extends BaseApi {
  constructor() {
    super("/api/regime-trabalho");
  }

}

export default new RegimeTrabalhoApi();