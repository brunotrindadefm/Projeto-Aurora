import BaseApi from "./baseApi.js";

class TipoTurmaApi extends BaseApi {
  constructor() {
    super("/api/tipo-turma");
  }

}

export default new TipoTurmaApi();