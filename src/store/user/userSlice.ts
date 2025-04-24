import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./type";

const initialState: UserState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
