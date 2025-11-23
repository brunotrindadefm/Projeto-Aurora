import BaseApi from "./baseApi.js";

class AlunoApi extends BaseApi {
  constructor() {
    super("/api/aluno");
  }

}

export default new AlunoApi();