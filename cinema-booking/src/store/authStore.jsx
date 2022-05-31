import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data/userData";

export const authStore = createSlice({
  name: "authStore",
  initialState: {
    userList: users,
    value: {
      isLoggedIn: false,
      loggedInError: "",
    },
    currentUser: {},
  },
  reducers: {
    addUser: (state, action) => {
      let temp = [...state.userList];
      const payload = action.payload.inputs;
      temp.unshift(payload);
      state.userList = temp;
    },
    login: (state, action) => {
      // state.value = state.value.filter((x) => x.id !== action.payload.id);
      state.userList.forEach((user) => {
        if (
          action.payload.inputs.username === user.username &&
          action.payload.inputs.password === user.password
        ) {
          state.value = { isLoggedIn: true, loggedInError: "" };
          state.currentUser = user;
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
      });
    },
  },
});

export const { login, addUser } = authStore.actions;
export default authStore.reducer;
