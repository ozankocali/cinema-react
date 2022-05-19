import { createSlice } from "@reduxjs/toolkit";
import { sessions } from "../data/sessionData";

export const sessionStore = createSlice({
    name: "sessionStore",
    initialState: { data: sessions },
    reducers: {
      addSession: (state, action) => {
        let temp = [...state.data];
        const payload = action.payload.inputs;
        temp.unshift(payload);
        state.data = temp;
      },
      deleteSession: (state, action) => {
        state.data = state.data.filter((x) => x.id !== action.payload.id);
      },
    },
  });
  
  export const { addSession, deleteSession } = sessionStore.actions;
  export default sessionStore.reducer;