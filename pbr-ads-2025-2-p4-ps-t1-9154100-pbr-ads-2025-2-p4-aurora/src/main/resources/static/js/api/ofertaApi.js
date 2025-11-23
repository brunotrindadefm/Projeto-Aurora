import BaseApi from "./baseApi.js";

class OfertaApi extends BaseApi {
  constructor() {
    super("/api/oferta");
  }

}

export default new OfertaApi();