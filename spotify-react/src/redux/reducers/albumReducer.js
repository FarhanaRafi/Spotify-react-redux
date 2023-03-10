import { GET_ALBUMS, GET_ERROR, GET_FAVORITES, GET_LOADING } from "../actions";

const initialState = {
  song: [],
  isLoading: true,
  isError: false,
};

const albumReducer = (state = initialState, action) => {
  console.log(action, "asdfghj");
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        song: action.payload.data.slice(0, 5),
      };

    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload.data.slice(0, 5),
      };
    case GET_LOADING:
      return {
        ...state,
        isLoading: action.payload, // which is false when the books are fetched
      };

    case GET_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
