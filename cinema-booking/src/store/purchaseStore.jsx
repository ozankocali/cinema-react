import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../data/movieData";
export const purchaseStore = createSlice({
  name: "movieStore",
  initialState: { data: {} },
  reducers: {
    addPurchase: (state, action) => {
      // let temp = [...state.data];
      // const payload = action.payload.inputs;
      // temp.unshift(payload);
      // state.data = temp;

      state.data=action.payload;

    },
    deleteMovie: (state, action) => {
      state.data = state.data.filter((x) => x.id !== action.payload.id);
    },
  },
});

export const { addPurchase } = purchaseStore.actions;
export default purchaseStore.reducer;
