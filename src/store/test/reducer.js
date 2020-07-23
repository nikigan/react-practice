const initialState = {
  tested: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST_STORE":
      return {
        ...state,
        tested: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
