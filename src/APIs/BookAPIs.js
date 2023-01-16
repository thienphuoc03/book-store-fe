import axios from "axios";
import BaseAPIs from "./BaseAPIs";

class BookAPIs {
  endpoints = {
    getAllBookUrl: BaseAPIs.baseURL + "/books",
  };
  async getAllBook(page, size) {
    try {
      let response = await axios.get(this.endpoints.getAllBookUrl, {
        params: {
          page: page,
          size: size,
        },
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log("Call API get all error", error);
      return Promise.reject(error);
    }
  }
}

export default new BookAPIs();
