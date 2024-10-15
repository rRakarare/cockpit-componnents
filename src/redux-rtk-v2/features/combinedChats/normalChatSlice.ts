import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SendData {
    message?: string;
    role?: "user";
    model?: "GPT-4o" | "Gemini 1.5 Pro" | "Claude 3.5 Sonnet";
    chatId?: string;
    type?: string;
  }

type SliceState = {
    sendData: SendData | null;
}


const initialState: SliceState = {
    sendData: {
        message: "",
        role: "user",
        model: "GPT-4o",
    },
};

const chatSlice = createSlice({
  name: "normalChat",
  initialState,
  reducers: {
    setSendData: (state, action: PayloadAction<Partial<SendData>>) => {
        state.sendData = {
            ...state.sendData,
            ...action.payload,
        };
    },
    resetState: (state) => {
        state.sendData = initialState.sendData;
    },
  },
});

export const { setSendData } =
  chatSlice.actions;
export default chatSlice.reducer;
