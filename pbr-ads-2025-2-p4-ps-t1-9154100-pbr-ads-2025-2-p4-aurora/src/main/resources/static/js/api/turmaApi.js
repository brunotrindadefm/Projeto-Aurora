import BaseApi from "./baseApi.js";

class TurmaApi extends BaseApi {
  constructor() {
    super("/api/turma");
  }

}

export default new TurmaApi();