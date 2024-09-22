import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceRed from "../features/auth/authSlice";
import chatSliceRed from "../features/chat/chatSlice";
import searchReducer from "../features/search/searchSlice"; // Import the searchSlice
import searchLibReducer from "../features/searchLib/searchLibSlice"; // Import the searchLibSlice
import imageChatReducer from "../features/imageChat/imageChatSlice";
import dataChatReducer from "../features/dataChat/dataChatSlice";
import assistantChatReducer from "../features/assistantChat/assistantChatSlice";
import copyToPromptReducer from "../features/copyToPrompt/copyToPromptSlice";
import libraryTypeReducer from "../features/libraryType/libraryTypeSlice";
import resetMiddleware from "../middlewares/resetMiddleware";

const appReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authSliceRed,
  chat: chatSliceRed,
  search: searchReducer,
  searchLib: searchLibReducer,
  imageChats: imageChatReducer,
  copyPrompt: copyToPromptReducer,
  dataChats: dataChatReducer,
  assistantChat: assistantChatReducer,
  libraryType: libraryTypeReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_STATE") {
    state = undefined; // Reset state
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware, resetMiddleware),
});
