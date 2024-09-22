import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    profileLog: (state, action) => {
      state.user = action.payload.user;
    },
    userLoggedIn: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.user = undefined;
      state.isAuthenticated = false;
    },
  },
});

export const { userLoggedIn, userLoggedOut, profileLog } = authSlice.actions;
export const getLoggedInUser = (state) => state.auth.user;
export const isAuthenticatedState = (state) => state.auth.isAuthenticated;
export default authSlice.reducer;
