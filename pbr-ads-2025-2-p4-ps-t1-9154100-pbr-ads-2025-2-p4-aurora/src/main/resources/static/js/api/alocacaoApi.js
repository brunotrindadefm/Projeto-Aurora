import BaseApi from "./baseApi.js";

class AlunoApi extends BaseApi {
  constructor() {
    super("/api/alocacao");
  }

}

export default new AlunoApi();