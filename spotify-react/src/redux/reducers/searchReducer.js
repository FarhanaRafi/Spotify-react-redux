import { GET_SEARCH, GET_ERROR, GET_LOADING } from "../actions";

const initialState = {
  search: [],
  isLoading: true,
  isError: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        search: action.payload.data,
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

export default searchReducer;
