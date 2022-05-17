import { createSlice } from "@reduxjs/toolkit";
import { theatres } from "../data/theatreData";

export const theatreStore = createSlice({
    name: "theatreStore",
    initialState: { data: theatres },
    reducers: {
      addTheatre: (state, action) => {
        let temp = [...state.data];
        const payload = action.payload.inputs;
        temp.unshift(payload);
        state.data = temp;
      },
      deleteTheatre: (state, action) => {
        state.data = state.data.filter((x) => x.id !== action.payload.id);
      },
    },
  });

  export const {addTheatre,deleteTheatre} =theatreStore.actions;
  export default theatreStore.reducers;