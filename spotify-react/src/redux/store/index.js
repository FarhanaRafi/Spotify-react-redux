import { configureStore, combineReducers } from "@reduxjs/toolkit";
import albumReducer from "../reducers/albumReducer";

const combinedReducer = combineReducers({
  album: albumReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
