import BaseApi from "./baseApi.js";

class UnidadeApi extends BaseApi {
    constructor() {
        super("/api/unidade");
    }

}

export default new UnidadeApi();