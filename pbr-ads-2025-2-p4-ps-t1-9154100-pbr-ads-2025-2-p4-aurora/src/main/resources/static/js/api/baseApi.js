export default class BaseApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getAll() {
    return this._request("", "GET");
  }

  async getById(id) {
    return this._request(`/${id}`, "GET");
  }

  async create(data) {
    return this._request("", "POST", data);
  }

  async update(id, data) {
    return this._request(`/${id}`, "PUT", data);
  }

  async delete(id) {
    return this._request(`/${id}`, "DELETE");
  }

  async _request(endpoint, method, body) {
    try {
      const res = await fetch(this.baseUrl + endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        const data = await res.json();

        throw new Error(data.mensagem || "Erro.");
      }

      return await res.json();

    } catch (err) {
      console.error("Erro na API:", err);
      throw err;
    }
  }
}
