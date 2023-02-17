import { GET_ERROR, GET_FAVORITES, GET_LOADING, GET_PODCAST } from "../actions";

const initialState = {
  favorites: [],
  podcasts: [],
  isLoading: true,
  isError: false,
};

const podcastReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PODCAST:
      return {
        ...state,
        podcasts: action.payload.data.slice(0, 5),
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

export default podcastReducer;
