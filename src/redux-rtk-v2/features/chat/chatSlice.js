import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
  refresh: false,
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    chatLogs: (state, action) => {
        state.chats = action.payload.data;

    },
    setChatMessages: (state, action) => {
      const currChats = Array.from(state.chats);
      const chatId = action.payload.chatId;
      const chatIndex = currChats.findIndex((chat) => chat._id === chatId);
      currChats[chatIndex].messages = action.payload.messages;
      state.chats = currChats;
    },

    setRefresh: (state, action) => {
      state.refresh = action.payload;
    },
    deleteChatById: (state, action) => {
      const currChats = Array.from(state.chats);
      const chatId = action.payload.chatId;
      const chatIndex = currChats.findIndex((chat) => chat._id === chatId);
      currChats.splice(chatIndex, 1);
      state.chats = currChats;
    },
  },
});

export const { chatLogs, setChatMessages, setRefresh, deleteChatById } =
  chatSlice.actions;
export default chatSlice.reducer;
