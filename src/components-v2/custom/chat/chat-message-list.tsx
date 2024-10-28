import ChatMessage from "./chat-message";
import React from "react";
import { useSyncedMessages } from "@/lib-v2/hooks/chat/useSyncedMessages";
import { MessageType } from "@/redux-rtk-v2/types/chats/message";
import useInView from "@/lib-v2/hooks/chat/useInView";
import { Button } from "@/components-v2/ui/button";
import { cn } from "@/lib-v2/utils";
import { useAnimatedText } from "@/lib-v2/hooks/chat/useAnimatedText";

interface ChatMessageListProps {
  messages: Partial<MessageType[]> | undefined;
  isLoading: boolean;
  isFinished: boolean;
  isStreaming: boolean;
  response: string | null | undefined;
  upstream: string | null | undefined;
}

const ChatMessageList: React.FC<ChatMessageListProps> = React.memo(
  ({ messages, isLoading, response, upstream, isStreaming, isFinished }) => {
    const { syncedMessages, syncedResponse, syncedUpstream } =
      useSyncedMessages({ response, upstream, isFinished });

      const animatedResponse = useAnimatedText(syncedResponse || "")

    const [elementRef, isInView, scrollToElement] = useInView({isLoading, autoScrollDependency: [syncedResponse, syncedUpstream], enableAutoScroll: true});

    return (
      <div className="flex-grow relative">
        <Button
          className={cn(
            "absolute bottom-5 z-50 left-1/2 transform -translate-x-1/2",
            isInView && "hidden"
          )}
          onClick={scrollToElement}
        >
          Scroll to end
        </Button>

        <div className="absolute inset-0 overflow-y-auto px-3">
          <div className="max-w-3xl mx-auto">
            {messages?.map((message, id) => (
              <ChatMessage {...message} key={id} />
            ))}
            {syncedMessages?.map((message, id) => (
              <ChatMessage {...message} key={id} />
            ))}
            {syncedUpstream && (
              <ChatMessage content={syncedUpstream} role="user" />
            )}
            {syncedResponse && (
              <ChatMessage isStreaming={isStreaming} content={animatedResponse} role="assistant" />
            )}
          </div>

          <div ref={elementRef} className="h-1" />
        </div>
      </div>
    );
  }
);

export default ChatMessageList;
