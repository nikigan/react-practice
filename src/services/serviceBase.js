import axios from "axios";

const USER_TOKEN = "b844e84c184b86258568441abd241419e007fcc4";

const instance = axios.create({
  baseURL: "http://37.140.197.3/api/",
  headers: {
    Authorization: `Token ${USER_TOKEN}`,
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
    return Promise.reject(error);
  }
);

export default instance;
