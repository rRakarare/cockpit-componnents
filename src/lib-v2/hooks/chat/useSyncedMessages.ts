import { useEffect, useState } from "react";

interface Props<T> {
    messages: T[]|undefined;
    response: string | null;
    upstream: string | null;
}

export const useSyncedMessages = <T>({ messages, response, upstream }: Props<T>) => {
    const [syncedResponse, setSyncedResponse] = useState<string | null>(null);
    const [syncedUpstream, setSyncedUpstream] = useState<string | null>(null);
    const [syncedMessages, setSyncedMessages] = useState<T[]|undefined>([]);

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
      if (!upstream && !response && messages && messages.length > (syncedMessages?.length ?? 0)) {
        setSyncedMessages(messages);
        setSyncedResponse(null);
        setSyncedUpstream(null);
      } else {
        setSyncedMessages(messages);
      }
    }, [messages]);

    return { syncedMessages, syncedResponse, syncedUpstream };
};
