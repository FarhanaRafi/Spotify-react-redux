import { configureStore, combineReducers } from "@reduxjs/toolkit";
import albumReducer from "../reducers/albumReducer";
import favoriteReducer from "../reducers/favoriteReducer";
import likedSongReducer from "../reducers/likedSongReducer";
import podcastReducer from "../reducers/podcastReducer";
import searchReducer from "../reducers/searchReducer";
import selectSongReducer from "../reducers/selectSongReducer";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import favoriteAlbumReducer from "../reducers/favoriteAlbumReducer";
import searchActiveReducer from "../reducers/searchActiveReducer";
import showSearchReducer from "../reducers/showSearchReducer";

const persistConfig = {
  storage: localStorage,
  key: "root",
};

const combinedReducer = combineReducers({
  album: albumReducer,
  podcast: podcastReducer,
  favorite: favoriteReducer,
  result: searchReducer,
  selected: selectSongReducer,
  likes: likedSongReducer,
  favoriteAlbum: favoriteAlbumReducer,
  searchActive: searchActiveReducer,
  showSearch: showSearchReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  //   reducer: combinedReducer,
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);

export { store, persistedStore };
