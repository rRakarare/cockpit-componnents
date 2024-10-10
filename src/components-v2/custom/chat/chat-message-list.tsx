import ChatMessage from "./chat-message";
import React from "react";
import { useSyncedMessages } from "@/lib-v2/hooks/chat/useSyncedMessages";
import { MessageType } from "@/redux-rtk-v2/types/chats/message";
import useInView from "@/lib-v2/hooks/chat/useInView";
import { Button } from "@/components-v2/ui/button";
import { cn } from "@/lib-v2/utils";

interface ChatMessageListProps {
  messages: Partial<MessageType[]> | undefined;
  isLoading: boolean;
  response: string | null;
  upstream: string | null;
}

const ChatMessageList: React.FC<ChatMessageListProps> = React.memo(
  ({ messages, isLoading, response, upstream }) => {
    const { syncedMessages, syncedResponse, syncedUpstream } =
      useSyncedMessages({ messages, response, upstream });


    const [elementRef, isInView, scrollToElement] = useInView(
      [syncedMessages, isLoading]
    );



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
            {syncedMessages?.map((message) => (
              <ChatMessage {...message} key={message?._id} />
            ))}
            {syncedUpstream && (
              <ChatMessage content={syncedUpstream} role="user" />
            )}
            {syncedResponse && (
              <ChatMessage content={syncedResponse} role="assistant" />
            )}
            
          </div>
          
          <div ref={elementRef} className="h-1" /> 
        </div>
        
      </div>
    );
  }
);

export default ChatMessageList;
