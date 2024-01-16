import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userSliceReducer from "./slices/userSlice";
import feedSliceReducer from "./slices/feedSlice";
import groupSliceReducer from "./slices/groupSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ userData: userSliceReducer, feedData: feedSliceReducer,groupData:groupSliceReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
