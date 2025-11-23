import BaseApi from "./baseApi.js";

class DisciplinaApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/disciplina");
  }

}

export default new DisciplinaApi();