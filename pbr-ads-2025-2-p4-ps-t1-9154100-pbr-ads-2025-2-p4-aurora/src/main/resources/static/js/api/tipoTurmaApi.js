import BaseApi from "./baseApi.js";

class TipoTurmaApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/tipo-turma");
  }

}

export default new TipoTurmaApi();