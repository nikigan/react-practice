import axios from "axios";

const USER_TOKEN = "b844e84c184b86258568441abd241419e007fcc4";

const instance = axios.create({
  baseURL: "http://37.140.197.3/api/",
  headers: {
    Authorization: `Token ${USER_TOKEN}`,
  },
});

export default instance;
