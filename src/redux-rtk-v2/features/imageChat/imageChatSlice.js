import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageChats: [],
};

const imageChatSlice = createSlice({
  name: "imageChats",
  initialState,
  reducers: {
    imageChatLogs: (state, action) => {
      state.imageChats = action.payload;
    },
  },
});

export const { imageChatLogs } = imageChatSlice.actions;
export default imageChatSlice.reducer;
