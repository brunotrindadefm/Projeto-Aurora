import BaseApi from "./baseApi.js";

class CursoApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/curso");
  }

}

export default new CursoApi();