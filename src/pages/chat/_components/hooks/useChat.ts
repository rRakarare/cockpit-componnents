/* eslint-disable react-hooks/exhaustive-deps */
import { useStream } from "@/lib-v2/hooks/chat/useStream";
import { useGetChatByIdQuery } from "@/redux-rtk-v2/features/combinedChats/combinedChatApi";
import { useEffect } from "react";

const useChatData = ({
  id,
  type,
}: {
  id: string | undefined;
  type: "normal" | "data" | "image";
}) => {
  const { data: chat, isLoading } = useGetChatByIdQuery({ id: id, type: type });

  return {
    chat: id ? chat?.data : null,
    isLoading,
  };
};

export function useChat(_id: string | undefined) {
  const { chat, isLoading } = useChatData({ id: _id, type: "normal" });

  const {
    stream,
    response,
    newChatId,
    isStreaming,
    upstream,
    isFinished,
    clearStates,
  } = useStream({endpoint: "chat/stream" });

  useEffect(() => {
    if (isFinished) {
      if (newChatId) {
        window.history.replaceState(null, "", `/chat/${newChatId}`);
      }
      clearStates();
    }
  }, [clearStates, isFinished, newChatId]);

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
