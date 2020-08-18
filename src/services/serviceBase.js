import axios from "axios";

const instance = axios.create({
  baseURL: "http://37.140.197.3/api/",
  headers: {
    "Content-type": "multipart/form-data",
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : 408;
    if (status >= 500) {
      window.console.error(error.toString());
    }
    if (status === 401) {
      window.console.log("logout");
    }
    return Promise.reject(error.response);
  }
);

export default instance;
