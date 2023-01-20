import axios from "axios";
import BaseAPIs from "./BaseAPIs";

class AuthenticationAPIs {
  endpoints = {
    LoginUrl: BaseAPIs.baseURL + "/login",
  };

  async login(user) {
    try {
      const response = await axios.post(this.endpoints.LoginUrl, {
        username: user.username,
        password: user.password,
      });

      return Promise.resolve(response);
    } catch (error) {
      console.log("Call API get all error", error);
      return Promise.reject(error);
    }
  }

  async logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthenticationAPIs();
