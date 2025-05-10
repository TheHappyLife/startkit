import { createSlice } from "@reduxjs/toolkit";
import { ExempleState } from "./type";
import { stingApp } from "@/dataSeting";

const getInitialExemple = () => {
  if (typeof window !== "undefined") {
    const exemple = localStorage.getItem(stingApp.app1[0].key);
    if (exemple) {
      return JSON.parse(exemple);
    }
  }
  return [];
};
const initialState: ExempleState = {
  exemple: getInitialExemple(),
};
const exempleSlice = createSlice({
  name: stingApp.app1[0].key,
  initialState,
  reducers: {
    setExemple: (state, action) => {
      state.exemple = action.payload;
      localStorage.setItem(stingApp.app1[0].key, JSON.stringify(action.payload));
    },
  },
});

export const { setExemple } = exempleSlice.actions;
export default exempleSlice.reducer;
