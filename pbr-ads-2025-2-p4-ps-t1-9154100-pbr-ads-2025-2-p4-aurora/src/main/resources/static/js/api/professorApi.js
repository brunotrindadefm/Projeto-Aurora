import BaseApi from "./baseApi.js";

class ProfessorApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/professor");
  }

}

export default new ProfessorApi();