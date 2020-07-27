export const onPlacesFetch = () => (dispatch) => {
  dispatch({
    type: "PLACES_FETCH_STARTED",
  });

  const mockPlaces = [
    {
      id: 1,
      name: "Заведение 1",
    },
    {
      id: 2,
      name: "Заведение 2",
    },
    {
      id: 3,
      name: "Заведение 3",
    },
    {
      id: 4,
      name: "Заведение 4",
    },
    {
      id: 5,
      name: "Заведение 5",
    },
    {
      id: 6,
      name: "Заведение 6",
    },
    {
      id: 7,
      name: "Заведение 7",
    },
  ];

  dispatch({
    type: "PLACES_FETCH_SUCCESS",
    payload: mockPlaces,
  });
};

export default {
  onPlacesFetch,
};
