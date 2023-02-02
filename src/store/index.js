import { createStore } from 'vuex';
import axios from 'axios';
import BaseAPIs from '../APIs/BaseAPIs';
import router from '../router';

export default createStore({
  state: {
    success: '',
    user: {
      token: localStorage.getItem('token') || '',
      id: localStorage.getItem('id') || '',
      username: localStorage.getItem('username') || '',
      roles: localStorage.getItem('roles') || '',
    },

    sideBarOpen: false,
  },
  getters: {
    isLoggedIn: state => !!state.user,
    authStatus: state => state.status,

    // admin
    sideBarOpen: state => {
      return state.sideBarOpen;
    },
  },
  mutations: {
    AUTH_REQUEST(state) {
      state.status = 'loading';
    },

    AUTH_SUCCESS(state, user) {
      state.status = 'success';
      state.user = user;
    },

    AUTH_ERROR(state) {
      state.status = 'error';
    },

    AUTH_LOGOUT(state) {
      state.status = '';
      state.user = '';
    },

    // admin
    toggleSidebar(state) {
      state.sideBarOpen = !state.sideBarOpen;
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST');
        axios
          .post(`${BaseAPIs.baseURL}/auth/login`, {
            username: user.username,
            password: user.password,
          })
          .then(response => {
            const token = response.data.access_token;
            const id = response.data.id;
            const username = response.data.username;
            const roles = response.data.roles;

            // localStorage.setItem("token", token);
            // localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem('token', token);
            localStorage.setItem('id', id);
            localStorage.setItem('username', username);
            localStorage.setItem('roles', roles);

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            commit('AUTH_SUCCESS', user);

            resolve(response);
          })
          .catch(err => {
            commit('AUTH_ERROR');
            localStorage.removeItem('user');

            reject(err);
          });
      });
    },

    logout({ commit }) {
      return new Promise(resolve => {
        // clear the user from the store
        commit('AUTH_LOGOUT');
        commit('AUTH_SUCCESS', '');
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('username');
        localStorage.removeItem('roles');

        // delete Authorization from header
        delete axios.defaults.headers.common['Authorization'];
        router.push('/');
        resolve();
      });
    },

    // admin
    toggleSidebar(context) {
      context.commit('toggleSidebar');
    },
  },
  modules: {},
});
