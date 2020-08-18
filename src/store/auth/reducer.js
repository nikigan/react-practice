import { auth as authActions } from "../actionTypes";

const initialState = {
  username: null,
  userId: null,
  loading: false,
  userToken: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authActions.login.started:
      return {
        ...state,
        error: false,
        loading: true,
      };

    case authActions.login.success:
      return {
        ...state,
        loading: false,
        username: action.payload.username,
        userId: action.payload.userId,
        userToken: action.payload.userToken,
      };

    case authActions.login.error:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case authActions.logout:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default auth;
