import { SET_SONG } from "../actions";

const initialState = {
  currentSong: null,
};

const selectSongReducer = (state = initialState, action) => {
  console.log(action, "asdfghj");
  switch (action.type) {
    case SET_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };

    default:
      return state;
  }
};

export default selectSongReducer;
