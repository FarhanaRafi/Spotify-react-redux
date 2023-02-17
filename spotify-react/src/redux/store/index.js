import { configureStore, combineReducers } from "@reduxjs/toolkit";
import albumReducer from "../reducers/albumReducer";
import podcastReducer from "../reducers/podcastReducer";

const combinedReducer = combineReducers({
  album: albumReducer,
  podcast: podcastReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
