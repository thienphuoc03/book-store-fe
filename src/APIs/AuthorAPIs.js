import axios from "axios";
import BaseAPIs from "./BaseAPIs";

class AuthorAPIs {
  endpoints = {
    getAllAuthorUrl: BaseAPIs.baseURL + "/authors",
  };
  async getAllAuthor() {
    try {
      let response = await axios.get(this.endpoints.getAllAuthorUrl);

      return Promise.resolve(response);
    } catch (error) {
      console.log("Call API get all error", error);
      return Promise.reject(error);
    }
  }
}

export default new AuthorAPIs();
