// import axios from "axios";

// const user = localStorage.getItem("user");
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export default {
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-type": "application/json",
    // Authorization: `Bearer ${user.token}`,
  },
};
