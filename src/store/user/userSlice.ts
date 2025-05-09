import type { UserState } from './type';
import { createSlice } from '@reduxjs/toolkit';

const initialState: UserState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
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
