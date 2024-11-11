
import { MessageType } from "@/redux-rtk-v2/types/chats/message";
import { useEffect, useState } from "react";

interface Props {
  response: string | null | undefined;
  upstream: string | null | undefined;
  isFinished?: boolean;
}

export const useSyncedMessages = ({
  response,
  upstream,
  isFinished,
}: Props) => {
  const [syncedResponse, setSyncedResponse] = useState<string | null>(null);
  const [syncedUpstream, setSyncedUpstream] = useState<string | null>(null);
  const [syncedMessages, setSyncedMessages] = useState<Partial<MessageType>[]>(
    []
  );

  useEffect(() => {
    if (response) {
      setSyncedResponse(response);
    }
  }, [response]);

  useEffect(() => {
    if (upstream) {
      setSyncedUpstream(upstream);
    }
  }, [upstream]);

  useEffect(() => {
    if (isFinished) {
      console.log({ syncedMessages, syncedUpstream, syncedResponse, response });
      setTimeout(() => {
        setSyncedMessages((currentMessages) => [
          ...currentMessages,
          { role: "user", content: syncedUpstream ?? "" },
          { role: "assistant", content: syncedResponse ?? "" },
        ]);
        setSyncedResponse(null);
        setSyncedUpstream(null);
      }, 100);
    }
  }, [isFinished]);

  return { syncedMessages, syncedResponse, syncedUpstream };
};