import { GET_SEARCH_RESULT } from "../actions";

const initialState = {
  result: false,
};

const showSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};

export default showSearchReducer;
