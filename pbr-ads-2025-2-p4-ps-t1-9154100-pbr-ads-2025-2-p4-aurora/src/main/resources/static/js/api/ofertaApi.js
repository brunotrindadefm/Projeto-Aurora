import BaseApi from "./baseApi.js";

class OfertaApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/oferta");
  }

}

export default new OfertaApi();