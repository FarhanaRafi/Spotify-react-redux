import { SET_SEARCH_ACTIVE } from "../actions";

const initialState = {
  active: false,
};
const searchActiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};

export default searchActiveReducer;
