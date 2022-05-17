import { combineReducers } from "redux";
import { movieStore } from "./movieStore";
import { authStore } from "./authStore";
import { configureStore } from "@reduxjs/toolkit";
import {theatreStore} from "./theatreStore";

const reducer = combineReducers({
  movieStore: movieStore.reducer,
  authStore: authStore.reducer,
  theatreStore:theatreStore.reducer
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
