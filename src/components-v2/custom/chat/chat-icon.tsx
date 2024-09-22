import { cn } from "@/lib-v2/utils";
import { Image, Layers, MessageSquare } from "lucide-react";

export const ChatIcon = ({ type, className }: { type: "chat" | "data-chat" | "image-chat" | undefined, className?: string }) => {
    switch (type) {
      case "chat":
        return <MessageSquare className={cn("size-4", className)} />;
      case "data-chat":
        return <Layers className={cn("size-4", className)} />;
      case "image-chat":
        return <Image className={cn("size-4", className)} />;
      default:
        return null;
    }
  };