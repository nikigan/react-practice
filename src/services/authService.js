import axios from "./serviceMethods";

const authBase = (username, password, path) => {
  const data = new FormData();

  data.append("username", username);
  data.append("password", password);
  return axios.POST(path, data);
};

export default {
  loginUser(username, password) {
    return authBase(username, password, "auth/token/");
  },
  registerUser(username, password) {
    return authBase(username, password, "users/");
  },
};
