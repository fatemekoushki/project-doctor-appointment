const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "https://doctors-api.liara.run",
  headers: {
    "Content-Type": "application-json",
  },
});

export default axiosClient;
