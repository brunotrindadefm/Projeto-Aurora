import BaseApi from "./baseApi.js";

class TurnoApi extends BaseApi {
  constructor() {
    super("/api/turno");
  }

}

export default new TurnoApi();