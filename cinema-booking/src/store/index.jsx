import { combineReducers } from "redux";
import { movieStore } from "./movieStore";
import { authStore } from "./authStore";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  movieStore: movieStore.reducer,
  authStore: authStore.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
