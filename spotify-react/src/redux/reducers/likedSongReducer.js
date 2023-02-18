import { SET_LIKED } from "../actions";

const initialState = {
  likedSongs: [],
};

const likedSongReducer = (state = initialState, action) => {
  console.log(action, "asdfghj");
  switch (action.type) {
    case SET_LIKED:
      return {
        ...state,
        likedSongs: [...state.likedSongs, action.payload],
      };

    default:
      return state;
  }
};

export default likedSongReducer;
