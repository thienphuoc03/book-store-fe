import axios from "axios";
import BaseAPIs from "./BaseAPIs";

class CategoryAPIs {
  endpoints = {
    getAllCategoryUrl: BaseAPIs.baseURL + "/categories",
  };

  async getAllCategory() {
    try {
      let response = await axios.get(this.endpoints.getAllCategoryUrl);

      return Promise.resolve(response);
    } catch (error) {
      console.log("Call API get all error", error);
      return Promise.reject(error);
    }
  }
}

export default new CategoryAPIs();
