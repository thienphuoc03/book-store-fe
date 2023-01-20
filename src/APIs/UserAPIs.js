import axios from "axios";
import BaseAPIs from "./BaseAPIs";

class UserAPIs {
  endpoints = {
    userUrl: BaseAPIs.baseURL + "/users",
  };

  async getUserById(id) {
    try {
      let response = await axios.get(this.endpoints.userUrl + "/" + id, {
        headers: BaseAPIs.headers,
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log("Call API get all error", error);
      return Promise.reject(error);
    }
  }
}

export default new UserAPIs();
