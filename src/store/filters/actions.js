import {
  filters as filtersActions,
  places as placesActions,
} from "../actionTypes";

const onSearchInput = (value) => (dispatch) => {
  dispatch({
    type: filtersActions.query,
    payload: value,
  });
};

const onPriceChange = (value) => (dispatch) => {
  dispatch({
    type: filtersActions.price,
    payload: value,
  });
};

const onOpenedChanged = (value) => (dispatch) => {
  dispatch({
    type: filtersActions.opened,
    payload: value,
  });
};

const onSearchParams = (query, price, opened, places) => (dispatch) => {
  let newPlaces = places;
  if (query && query.length > 0) {
    newPlaces = newPlaces.filter((place) => place.name.includes(query));
    dispatch(onSearchInput(query));
  }
  if (price) {
    newPlaces = newPlaces.filter((place) => place.average_price <= price);
    dispatch(onPriceChange(parseInt(price, 10)));
  }
  if (opened) {
    newPlaces = newPlaces.filter((place) => place.opened);
    dispatch(onOpenedChanged(true));
  } else {
    dispatch(onOpenedChanged(false));
  }
  dispatch({
    type: placesActions.filter,
    payload: newPlaces,
  });
};

export { onSearchInput, onPriceChange, onOpenedChanged, onSearchParams };
