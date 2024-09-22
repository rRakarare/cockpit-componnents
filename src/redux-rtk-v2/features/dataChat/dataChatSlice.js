import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataChats: [],
  data: {},
};

const dataChatSlice = createSlice({
  name: "dataChats",
  initialState,
  reducers: {
    dataChatLogs: (state, action) => {
      state.dataChats = action.payload;
      if (action.payload?.length > 0) {
        state.data[action.payload[0].model] = action.payload;
      }
    },
    setDataChatMessages: (state, action) => {
      const { chatId, model, messages } = action.payload;
      const currChats = Array.from(state.data[model]);
      const chatIndex = currChats.findIndex((chat) => chat._id === chatId);

      if (chatIndex !== -1) {
        currChats[chatIndex].messages = messages;
        state.data[model] = currChats;
      }
    },
  },
});

export const { dataChatLogs, setDataChatMessages } = dataChatSlice.actions;
export default dataChatSlice.reducer;
