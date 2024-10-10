import { RootState } from "@/redux-rtk-v2/app/store";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

interface StreamProps {
  endpoint: string;
}



export const useStream = ({ endpoint }: StreamProps) => {


  const sendData = useSelector((state:RootState) => state.combinedChat.sendData);

  console.log("sendData", sendData);

  const responseRef = useRef<string>("");
  const [response, setResponse] = useState<string | null>(null);
  const [upstream, setUpStream] = useState<string | null>(null);
  const [newChatId, setNewChatId] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const clearStates = () => {
    setResponse(null);
    setUpStream(null);
    setNewChatId(null);
    setIsStreaming(false);
    setIsFinished(false);
  }

  const stream = async () => {

    setUpStream(sendData?.message ?? null);
    setIsStreaming(true);
    try {
      const isCancelled = false;
      const formData = null
      // getting response from server based on the user prompt
      const headers = {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      };
      const formDataHeaders = {
        Accept: "application/json, text/plain, */*",
      };
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${endpoint}`,
        {
          method: "POST",
          headers: formData ? formDataHeaders : headers,
          body: formData ? formData : JSON.stringify(sendData),
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
