import BaseApi from "./baseApi.js";

class DisciplinaApi extends BaseApi {
  constructor() {
    super("/api/disciplina");
  }

}

export default new DisciplinaApi();