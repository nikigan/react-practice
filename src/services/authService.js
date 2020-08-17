import axios from "./serviceMethods";

const authBase = async (username, password, path) => {
  const data = new FormData();

  data.append("username", username);
  data.append("password", password);

  try {
    const response = await axios.POST(path, data);
    localStorage.setItem("token", response.data.token);
    return response.data.user;
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  loginUser(username, password) {
    return authBase(username, password, "auth/token/");
  },
  registerUser(username, password) {
    return authBase(username, password, "users/");
  },
  isAuth() {
    return localStorage.getItem("token");
  },
  logout() {
    localStorage.removeItem("token");
  },
};
