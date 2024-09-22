import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assistantChats: [],
};

const assistantChatSlice = createSlice({
  name: "assistantChats",
  initialState,
  reducers: {
    assistantChatLogs: (state, action) => {
      state.assistantChats = action.payload;
    },
  },
});

export const { assistantChatLogs } = assistantChatSlice.actions;
export default assistantChatSlice.reducer;
