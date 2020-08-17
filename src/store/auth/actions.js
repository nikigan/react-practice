import { message } from "antd";
import "antd/es/message/style/css";
import { auth as authActions } from "../actionTypes";
import authService from "../../services/authService";
import history from "../../index";

const onLogin = (username, password, redirectTo) => async (dispatch) => {
  dispatch({
    type: authActions.login.started,
  });

  try {
    const response = await authService.loginUser(username, password);

    dispatch({
      type: authActions.login.success,
      payload: { username: response.username, userId: response.pk },
    });

    history.replace(redirectTo);
  } catch (error) {
    dispatch({
      type: authActions.login.error,
      payload: error.message,
    });

    message.error(error.message);
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  onLogin,
};
