import axios from "axios";

const instance = axios.create({
  baseURL: "http://37.140.197.3/api/",
});

export default instance;
