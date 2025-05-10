import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import exempleReducer from "./exemple/exempleSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { stingApp } from "@/dataSeting";

const exemplePersistConfig = {
  key: stingApp.app1[0].key,
  storage,
  whitelist: [stingApp.app1[0].key],
};
const rootReducer = combineReducers({
  user: userReducer,
  exemple:
    typeof window !== "undefined"
      ? persistReducer(exemplePersistConfig, exempleReducer)
      : exempleReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
