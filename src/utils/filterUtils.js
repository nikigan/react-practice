const onFilterChanged = (query, price, opened, history) => {
  let url = "?";
  if (query.length > 0) {
    url += `query=${query}&`;
  }
  url += `price=${price}&`;
  if (opened) {
    url += `opened=true`;
  }
  history.push(url);
};

export default onFilterChanged;
