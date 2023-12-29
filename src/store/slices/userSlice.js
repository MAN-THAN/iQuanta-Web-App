import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userData",
  initialState: {},
  reducers: {
    addUserData(state, action) {
      return { ...state, ...action.payload };
    }
  },
});

export default userSlice.reducer;
export const { addUserData } = userSlice.actions;
