import BaseApi from "./baseApi.js";

class CategoriaApi extends BaseApi {
  constructor() {
    super("/api/categoria");
  }

}

export default new CategoriaApi();