
import { useStream } from "@/lib-v2/hooks/chat/useStream";
import { useAppDispatch } from "@/redux-rtk-v2/app/store";
import { useGetChatByIdQuery } from "@/redux-rtk-v2/features/combinedChats/combinedChatApi";
import { setSendData } from "@/redux-rtk-v2/features/combinedChats/normalChatSlice";
import { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";

const useChatData = ({
  id,
  type,
}: {
  id: string | undefined;
  type: "normal" | "data" | "image";
}) => {
  const { data: chat, isLoading } = useGetChatByIdQuery({ id: id, type: type }, {skip: id === "newChat"});

  return {
    chat: id ? chat?.data : null,
    isLoading,
  };
};

export function useChat() {

  
  const { id } = useParams<{ id: string }>();
  const { state} = useLocation();
  const dispatch = useAppDispatch();




  const { chat, isLoading } = useChatData({ id, type: "normal" });

  const {
    stream,
    response,
    newChatId,
    isStreaming,
    upstream,
    isFinished,
    clearStates,
  } = useStream({endpoint: "chat/stream" });


  const hasRun = useRef(false);
  useEffect(() => {
    if (state?.startStream && !hasRun.current) {
      stream();
      hasRun.current = true;
    }
  }, [state]);
  

  useEffect(() => {
    if (isFinished) {
      if (newChatId) {
        window.history.replaceState(null, "", `/chat/${newChatId}`);
        dispatch(setSendData({ chatId: newChatId }));
      }
      clearStates();
    }
  }, [newChatId,isFinished]);

  return {
    chat,
    isLoadingChats: isLoading,
    stream,
    upstream,
    response,
    isStreaming,
    isFinished,
  };
}
