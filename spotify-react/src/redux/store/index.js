import { configureStore, combineReducers } from "@reduxjs/toolkit";
import albumReducer from "../reducers/albumReducer";
import favoriteReducer from "../reducers/favoriteReducer";
import podcastReducer from "../reducers/podcastReducer";

const combinedReducer = combineReducers({
  album: albumReducer,
  podcast: podcastReducer,
  favorite: favoriteReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
