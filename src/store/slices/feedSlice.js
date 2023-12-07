import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feedData",
  initialState: [],
  reducers: {
    addFeedData(state, action) {
      state.push(action.payload);
    },
  },
});

export default feedSlice.reducer;
export const { addFeedData } = feedSlice.actions;
