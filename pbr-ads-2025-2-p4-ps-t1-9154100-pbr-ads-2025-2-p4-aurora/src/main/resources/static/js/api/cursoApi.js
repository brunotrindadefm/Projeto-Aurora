import BaseApi from "./baseApi.js";

class CursoApi extends BaseApi {
  constructor() {
    super("/api/curso");
  }

}

export default new CursoApi();