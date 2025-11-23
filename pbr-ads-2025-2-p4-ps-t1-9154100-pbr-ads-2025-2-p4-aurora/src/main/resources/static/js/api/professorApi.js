import BaseApi from "./baseApi.js";

class ProfessorApi extends BaseApi {
  constructor() {
    super("/api/professor");
  }

}

export default new ProfessorApi();