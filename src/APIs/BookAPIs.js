import axios from "axios";
import BaseAPIs from "./BaseAPIs";

class BookAPIs {
  endpoints = {
    bookUrl: BaseAPIs.baseURL + "/books",
  };

  async getAllBook(page, size, sortBy) {
    try {
      let response = await axios.get(this.endpoints.bookUrl, {
        params: {
          page: page,
          size: size,
          sortBy: sortBy,
        },
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log("Call API get all error", error);
      return Promise.reject(error);
    }
  }

  async getBookById(id) {
    try {
      let response = await axios.get(this.endpoints.bookUrl + "/" + id);

      return Promise.resolve(response);
    } catch (error) {
      console.log("Call API get all error", error);
      return Promise.reject(error);
    }
  }

  async getBookByCategoryId(id, page, size) {
    try {
      let response = await axios.get(
        this.endpoints.bookUrl + "/category/" + id,
        {
          params: {
            page: page,
            size: size,
          },
        }
      );

      return Promise.resolve(response);
    } catch (error) {
      console.log("Call API get all error", error);
      return Promise.reject(error);
    }
  }
}

export default new BookAPIs();
