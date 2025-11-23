import BaseApi from "./baseApi.js";

class TurmaApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/turma");
  }

}

export default new TurmaApi();