import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserInfoFromCookiesThunk = createAsyncThunk(
  "user/getUserInfoFromCookies",
  async () => {
    return;
  }
);
