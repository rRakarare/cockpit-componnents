import React from "react";
import { cn } from "@/lib-v2/utils";
import { FolderOpen, Image, Layers, MessageSquare } from "lucide-react";

export const ChatIcon = React.forwardRef<SVGSVGElement, { type: "chat" | "data-chat" | "image-chat" | "project" | undefined, className?: string }>(
  ({ type, className }, ref) => {
    switch (type) {
      case "chat":
        return <MessageSquare ref={ref} className={cn("size-4", className)} />;
      case "data-chat":
        return <Layers ref={ref} className={cn("size-4", className)} />;
      case "image-chat":
        return <Image ref={ref} className={cn("size-4", className)} />;
      case "project":
        return <FolderOpen ref={ref} className={cn("size-4", className)} />;
      default:
        return null;
    }
  }
);

ChatIcon.displayName = "ChatIcon";