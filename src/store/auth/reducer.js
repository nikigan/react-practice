import { auth as authActions } from "../actionTypes";

const initialState = {
  username: null,
  userId: null,
  loading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authActions.login.started:
      return {
        ...state,
        loading: true,
      };

    case authActions.login.success:
      return {
        ...state,
        loading: false,
        username: action.payload.username,
        userId: action.payload.userId,
      };

    case authActions.login.error:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default auth;
