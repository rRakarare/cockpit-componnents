import { ChatType } from "@/config-v2/chat/base-chat/types";
import { DataChatType } from "@/config-v2/chat/data-chat/types";
import { ImageChatType } from "@/config-v2/chat/image-chat/types";
import { useGetChatsByAuthIdQuery } from "@/redux-rtk-v2/features/chat/chatApi";
import { useGetDataChatsByAuthIdQuery } from "@/redux-rtk-v2/features/dataChat/dataChatApi";
import { useGetImageChatsByAuthIdQuery } from "@/redux-rtk-v2/features/imageChat/imageChatApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";

export type CombinedChatType = ChatType | DataChatType | ImageChatType;

export const useInitAllChats = () => {
    
  const { isLoading: isLoading1, isError: isError1 } = useGetChatsByAuthIdQuery(
    {}
  );
  const { isLoading: isLoading2, isError: isError2 } =
    useGetDataChatsByAuthIdQuery({});
  const { isLoading: isLoading3, isError: isError3 } =
    useGetImageChatsByAuthIdQuery({});

  const isLoading = isLoading1 || isLoading2 || isLoading3;
  const isError = isError1 || isError2 || isError3;


  return { isLoading, isError };
};

export function useAllChatsFilter() {
  const { isLoading, isError } = useInitAllChats();

  const sChats = useSelector((state: any) => state.chat.chats);
  const iChats = useSelector((state: any) => state.imageChats.imageChats);
  const dChats = useSelector((state: any) => state.dataChats.dataChats);

  const [typeFilter, setTypeFilter] = useState<("chat" | "data-chat" | "image-chat")[]>(["chat", "data-chat", "image-chat"]);



  const [allChats, setAllChats] = useState<CombinedChatType[]>([]);
  const [filteredChats, setFilteredChats] = useState<CombinedChatType[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isLoading) {
      const chats = [
        ...sChats.map((item) => ({ ...item, type: "chat" })),
        ...iChats.map((item) => ({ ...item, type: "image-chat" })),
        ...dChats.map((item) => ({ ...item, type: "data-chat" })),
      ];

      const newArr = chats.sort((a, b) => {
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      });
      setAllChats([...newArr]);
      setFilteredChats([...newArr]); // Set filteredChats to allChats by default
    }
  }, [sChats, iChats, dChats, isLoading]);

  useEffect(() => {
    const filtered = allChats.filter((chat) => typeFilter.includes(chat.type));
    setFilteredChats(filtered);
  }, [typeFilter, allChats]);

  const setFilter = (searchKey: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (searchKey) {
      timerRef.current = setTimeout(() => {
        const filtered = allChats.filter((chat) =>
          chat.title.toLowerCase().includes(searchKey.toLowerCase()) &&
          typeFilter.includes(chat.type)
        );
        setFilteredChats(filtered);
      }, 400);
    } else {
      const filtered = allChats.filter((chat) => typeFilter.includes(chat.type));
      setFilteredChats(filtered);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return { allChats: filteredChats, isLoading, isError, setFilter, typeFilter, setTypeFilter };
}
