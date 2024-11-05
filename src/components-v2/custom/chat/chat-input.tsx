import { Button } from "@/components-v2/ui/button";
import { AutosizeTextarea } from "@/components-v2/ui/textarea-nostyle";
import { cn } from "@/lib-v2/utils";
import { Forward, SlidersVertical } from "lucide-react";
import { useEffect, useState, KeyboardEvent } from "react";

interface ChatInputProps {
  children?: React.ReactNode;
  onSend: () => void;
  onChange: (message: string) => void;
  openOnRender?: boolean;
  value?: string;
}

export default function ChatInput({ children, onSend, onChange, value, openOnRender }: ChatInputProps) {
  const [openOptions, setOpenOptions] = useState(false);

  useEffect(() => {
    if (openOnRender) {
      const timer = setTimeout(() => {
        setOpenOptions(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [openOnRender]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="pt-0 w-full max-w-4xl mx-auto shrink-0">
      <div
        className={cn(
          "px-4 -mb-1 rounded-t-2xl bg-accent mx-2 border max-h-0 duration-300 overflow-hidden border-foreground/10",
          openOptions && "max-h-20 py-2 pb-3"
        )}
      >
        {children}
      </div>
      <div className="border rounded-2xl shadow-lg p-4 bg-background relative">
        <AutosizeTextarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          maxHeight={200}
          placeholder="type message ..."
        />
        <div className="flex justify-between">
          {children && (
            <Button
              onClick={() => setOpenOptions((open) => !open)}
              className="rounded-xl"
              size="icon"
              variant="outline"
            >
              <SlidersVertical className="size-6" />
            </Button>
          )}
          <Button
            onClick={onSend}
            className="rounded-xl ml-auto"
            size="icon"
            variant="default"
          >
            <Forward className="size-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}