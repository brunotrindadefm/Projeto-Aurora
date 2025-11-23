import BaseApi from "./baseApi.js";

class UnidadeApi extends BaseApi {
    constructor() {
        super("http://localhost:8080/api/unidade");
    }

}

export default new UnidadeApi();