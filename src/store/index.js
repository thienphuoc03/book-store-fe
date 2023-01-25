import { createStore } from "vuex";
import axios from "axios";
import BaseAPIs from "../APIs/BaseAPIs";

export default createStore({
  state: {
    success: "",
    user: {
      token: localStorage.getItem("user.token") || "",
      id: localStorage.getItem("user.id") || "",
      username: localStorage.getItem("user.username") || "",
      roles: localStorage.getItem("user.roles") || [],
    },

    sideBarOpen: false,
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    authStatus: (state) => state.status,

    // admin
    sideBarOpen: (state) => {
      return state.sideBarOpen;
    },
  },
  mutations: {
    AUTH_REQUEST(state) {
      state.status = "loading";
    },

    AUTH_SUCCESS(state, user) {
      state.status = "success";
      state.user = user;
    },

    AUTH_ERROR(state) {
      state.status = "error";
    },

    AUTH_LOGOUT(state) {
      state.status = "";
      state.user = "";
    },

    // admin
    toggleSidebar(state) {
      state.sideBarOpen = !state.sideBarOpen;
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("AUTH_REQUEST");
        axios
          .post(`${BaseAPIs.baseURL}/auth/login`, {
            username: user.username,
            password: user.password,
          })
          .then((response) => {
            const token = response.data.access_token;
            const id = response.data.id;
            const username = response.data.username;
            const roles = response.data.roles;

            // localStorage.setItem("token", token);
            // localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("user.token", token);
            localStorage.setItem("user.id", id);
            localStorage.setItem("user.username", username);
            localStorage.setItem("user.roles", roles);

            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            commit("AUTH_SUCCESS", user);

            resolve(response);
          })
          .catch((err) => {
            commit("AUTH_ERROR");
            localStorage.removeItem("user");

            reject(err);
          });
      });
    },

    logout({ commit }) {
      return new Promise((resolve) => {
        commit("AUTH_LOGOUT");
        localStorage.removeItem("user");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },

    // admin
    toggleSidebar(context) {
      context.commit("toggleSidebar");
    },
  },
  modules: {},
});
