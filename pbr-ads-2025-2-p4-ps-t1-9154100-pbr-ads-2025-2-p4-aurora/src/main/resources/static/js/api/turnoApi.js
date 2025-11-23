import BaseApi from "./baseApi.js";

class TurnoApi extends BaseApi {
  constructor() {
    super("http://localhost:8080/api/turno");
  }

}

export default new TurnoApi();