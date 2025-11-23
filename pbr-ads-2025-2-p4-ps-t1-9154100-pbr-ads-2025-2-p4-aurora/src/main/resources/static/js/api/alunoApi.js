import BaseApi from "./baseApi.js";

class AlunoApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/aluno");
  }

}

export default new AlunoApi();