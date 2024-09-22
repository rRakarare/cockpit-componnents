import { ChatType } from "@/config-v2/chat/base-chat/types";
import { useGetChatsByAuthIdQuery } from "@/redux-rtk-v2/features/chat/chatApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useInitChats = () => {
  const { isLoading, isError } = useGetChatsByAuthIdQuery({});

  return { isLoading, isError };
};

export function useChat({ _id }: { _id: string | undefined }) {
  const { isLoading, isError } = useInitChats();

  const sChats = useSelector((state: any) => state.chat.chats);

  const [chat, setChat] = useState<ChatType | null>(null);

  useEffect(() => {
    if (!isLoading) {
      const chat = sChats.find((chat: ChatType) => chat._id === _id);
      setChat(chat);
    }
  }, [sChats, isLoading, _id]);

  return { chat, isLoading, isError };
}
