import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const copyToPromptSlice = createSlice({
  name: "imageChats",
  initialState,
  reducers: {
    copyLogs: (state, action) => {
      state.data = action.payload;
    },
    // eslint-disable-next-line no-unused-vars
    removeLogs: (state) => {
      state.data = null;
    },
  },
});

export const { copyLogs, removeLogs } = copyToPromptSlice.actions;
export default copyToPromptSlice.reducer;
