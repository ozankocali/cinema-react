import { combineReducers } from "redux";
import { movieStore } from "./movieStore";
import { authStore } from "./authStore";
import { configureStore } from "@reduxjs/toolkit";
import {theatreStore} from "./theatreStore";
import { sessionStore } from "./sessionStore";
import { purchaseStore } from "./purchaseStore";

const reducer = combineReducers({
  movieStore: movieStore.reducer,
  authStore: authStore.reducer,
  theatreStore:theatreStore.reducer,
  sessionStore:sessionStore.reducer,
  purchaseStore:purchaseStore.reducer
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
