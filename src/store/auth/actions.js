import { message } from "antd";
import "antd/es/message/style/css";
import { auth as authActions } from "../actionTypes";
import authService from "../../services/authService";
import axios from "../../services/serviceBase";

const authBase = (
  serviceMethod,
  { username, password },
  redirectTo,
  history
) => async (dispatch) => {
  dispatch({
    type: authActions.login.started,
  });

  try {
    const { data: response } = await serviceMethod(username, password);
    dispatch({
      type: authActions.login.success,
      payload: {
        username: response.user.username,
        userId: response.user.pk,
        userToken: response.token,
      },
    });

    axios.defaults.headers.common.Authorization = `Token ${response.token}`;

    history.replace(redirectTo);
  } catch (error) {
    dispatch({
      type: authActions.login.error,
    });
    if (error.status === 400) {
      message.error("Неверный логин или пароль");
    } else {
      message.error(error.request);
    }
  }
};

const onLogin = ({ username, password }, redirectTo, history) => async (
  dispatch
) => {
  dispatch(
    authBase(authService.loginUser, { username, password }, redirectTo, history)
  );
};

const onRegister = ({ username, password }, redirectTo, history) => async (
  dispatch
) => {
  dispatch(
    authBase(
      authService.registerUser,
      { username, password },
      redirectTo,
      history
    )
  );
};

const onLogout = (history) => (dispatch) => {
  dispatch({
    type: authActions.logout,
  });

  history.replace("/login");
};

export { onLogin, onLogout, onRegister };
