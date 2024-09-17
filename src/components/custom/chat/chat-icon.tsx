import { cn } from "@/lib/utils";
import { Layers, MessageSquare, Play } from "lucide-react";

export const ChatIcon = ({ type, className }: { type: string | undefined, className?: string }) => {
    switch (type) {
      case "chat":
        return <MessageSquare className={cn("size-4", className)} />;
      case "data-chat":
        return <Layers className={cn("size-4", className)} />;
      case "image-chat":
        return <Play className={cn("size-4", className)} />;
      default:
        return null;
    }
  };