import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../data/movieData";
export const movieStore = createSlice({
  name: "movieStore",
  initialState: { data: movies },
  reducers: {
    addMovie: (state, action) => {
      console.log("triggered");
      let temp = [...state.data];
      const payload = action.payload.inputs;
      temp.unshift(payload);
      state.data = temp;
    },
    deleteMovie: (state, action) => {
      state.data = state.data.filter((x) => x.id !== action.payload.id);
    },
  },
});

export const { addMovie, deleteMovie } = movieStore.actions;
export default movieStore.reducer;
