import { RootState, useAppDispatch } from "@/redux-rtk-v2/app/store";
import { setSendData } from "@/redux-rtk-v2/features/combinedChats/normalChatSlice";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

interface StreamProps {
  endpoint: string;
}



export const useStream = ({ endpoint }: StreamProps) => {


  const sendData = useSelector((state:RootState) => state.combinedChat.sendData);
  const dispatch = useAppDispatch();

  const responseRef = useRef<string>("");
  const [response, setResponse] = useState<string | null>(null);
  const [upstream, setUpStream] = useState<string | null >(null);
  const [newChatId, setNewChatId] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const clearStates = () => {
    responseRef.current = "";
    setResponse(null);
    setUpStream(null);
    setNewChatId(null);
    setIsStreaming(false);
    setIsFinished(false);
  }

  const stream = async () => {

    const formData = sendData;
    dispatch(setSendData({message: ""}));

    setUpStream(formData?.message ?? null);
    setIsStreaming(true);
    try {
      const isCancelled = false;
      // getting response from server based on the user prompt
      const headers = {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      };
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${endpoint}`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );
      const reader = response.body
        ? response.body.pipeThrough(new TextDecoderStream()).getReader()
        : null;
      if (!reader) {
        throw new Error("Response body is null");
      }
      while (true) {
        const { value, done } = await reader.read();
        if (isCancelled) break; // Exit if the operation is cancelled
        if (value) {
          if (value.startsWith("KIChatID:")) {
            const data = value.split("KIChatID:")[1];
            setNewChatId(data);
          } else {
            responseRef.current = responseRef.current + value;
          }
        }

        setResponse(responseRef.current);
        if (done) {
          setIsStreaming(false);
          setIsFinished(true);
          break;
        }
      }
    } catch (err) {
      setIsStreaming(false);
      setIsFinished(true);
      console.error("Stream response error:", err);
    }
  };

  return {
    stream,
    upstream,
    response,
    newChatId,
    isStreaming,
    isFinished,
    clearStates
  };
};
