import BaseApi from "./baseApi.js";

class CategoriaApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/categoria");
  }

}

export default new CategoriaApi();