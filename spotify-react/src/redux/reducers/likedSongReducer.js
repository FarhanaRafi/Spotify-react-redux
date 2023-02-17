import { SET_SONG } from "../actions";

const initialState = {
  likedSongs: [],
};

const likedSongReducer = (state = initialState, action) => {
  console.log(action, "asdfghj");
  switch (action.type) {
    case SET_SONG:
      return {
        ...state,
        likedSongs: [...state.likedSongs, action.payload],
      };

    default:
      return state;
  }
};

export default likedSongReducer;
