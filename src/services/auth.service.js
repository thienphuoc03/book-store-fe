import axios from "axios";
import BaseAPIs from "../APIs/BaseAPIs";

class AuthService {
  endpoints = {
    LoginUrl: BaseAPIs.baseURL + "/login",
  };
  async login(user) {
    try {
      let response = await axios
        .post(this.endpoints.LoginUrl, {
          username: user.username,
          password: user.password,
        })
        .then((response) => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }

          return response.data;
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

export default new AuthService();
