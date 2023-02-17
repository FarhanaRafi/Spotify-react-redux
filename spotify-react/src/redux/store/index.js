import { configureStore, combineReducers } from "@reduxjs/toolkit";
import albumReducer from "../reducers/albumReducer";
import favoriteReducer from "../reducers/favoriteReducer";
import podcastReducer from "../reducers/podcastReducer";
import searchReducer from "../reducers/searchReducer";
import selectSongReducer from "../reducers/selectSongReducer";

const combinedReducer = combineReducers({
  album: albumReducer,
  podcast: podcastReducer,
  favorite: favoriteReducer,
  result: searchReducer,
  selected: selectSongReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
