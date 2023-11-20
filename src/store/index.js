import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userSliceReducer from "./slices/userSlice";

const rootReducer = combineReducers({ userData: userSliceReducer });

export const store = configureStore({
  reducer: rootReducer,
});
