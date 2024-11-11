
import ChatInput from "@/components-v2/custom/chat/chat-input";
import { RootState, useAppDispatch } from "@/redux-rtk-v2/app/store";
import { setSendData } from "@/redux-rtk-v2/features/combinedChats/normalChatSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components-v2/ui/select";
import { ModelSchema } from "@/config-v2/chat/base-chat/types";

type ChatSettingsProps = {
  onSend: () => void;
  openOnRender?: boolean;
};

function ChatSettings({ onSend, openOnRender }: ChatSettingsProps) {
  const { id } = useParams<{ id: string | undefined }>();

  useEffect(() => {
    if (id) {
      dispatch(
        setSendData({
          chatId: id,
        })
      );
    } else {
      dispatch(
        setSendData({
          chatId: undefined,
        })
      );
    }
  }, [id]);

  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    dispatch(
      setSendData({
        message: value,
      })
    );
  };

  const sendData = useSelector(
    (state: RootState) => state.combinedChat.sendData
  );

  return (
    <div className="mb-10">
      <ChatInput
        value={sendData?.message}
        onChange={handleChange}
        onSend={onSend}
        openOnRender={openOnRender}
      >
        <Select defaultValue={ModelSchema.options[0]}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Model" />
          </SelectTrigger>
          <SelectContent>
            {ModelSchema.options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </ChatInput>
    </div>
  );
}

export default ChatSettings;
