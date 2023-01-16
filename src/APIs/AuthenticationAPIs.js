import axios from "axios";
import BaseAPIs from "./BaseAPIs";

class AuthenticationAPIs {
  endpoints = {
    LoginUrl: BaseAPIs.baseURL + "/login",
  };
  async login(username, password) {
    try {
      let response = await axios.post(this.endpoints.LoginUrl, {
        params: {
          username: username,
          password: password,
        },
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log("Call API get all error", error);
      return Promise.reject(error);
    }
  }
}

export default new AuthenticationAPIs();
