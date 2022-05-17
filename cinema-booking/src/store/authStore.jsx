import { createSlice } from "@reduxjs/toolkit";

export const authStore = createSlice({
  name: "authStore",
  initialState: {
    value: {
      isLoggedIn: false,
      loggedInError: "",
    },
  },
  reducers: {
    login: (state, action) => {
      // state.value = state.value.filter((x) => x.id !== action.payload.id);
      if (
        action.payload.username === "ozan" &&
        action.payload.password === "pass"
      ) {
        state.value = { isLoggedIn: true, loggedInError: "" };
        console.log("login successfull", state.value.isLoggedIn);
      } else {
        state.value = {
          isLoggedIn: false,
          loggedInError: "Username or Password is wrong!",
        };
        console.log(
          "Username or Password is wrong!",
          state.value.loggedInError
        );
      }
    },
  },
});

export const { login } = authStore.actions;
export default authStore.reducer;
