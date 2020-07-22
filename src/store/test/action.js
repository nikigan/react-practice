const onTestStore = () => (dispatch) => {
  dispatch({
    type: "TEST_STORE",
  });
};

export default onTestStore;
