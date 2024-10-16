/* eslint-disable react-hooks/exhaustive-deps */
import ChatInput from "@/components-v2/custom/chat/chat-input"
import { Button } from "@/components-v2/ui/button"
import { RootState, useAppDispatch } from "@/redux-rtk-v2/app/store"
import { setSendData } from "@/redux-rtk-v2/features/combinedChats/normalChatSlice"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

type ChatSettingsProps = {
    onSend: () => void
    }

function ChatSettings({onSend}:ChatSettingsProps) {

    const {id} = useParams<{id:string|undefined}>()

    useEffect(() => {
        if(id) {
            dispatch(setSendData({
                chatId:id
            }))
        } else {
            dispatch(setSendData({
                chatId:undefined
            }))
        }
    }, [id])
    

    const dispatch = useAppDispatch()

    const handleChange = (value:string) => {
        dispatch(setSendData({
            message:value
        }))
    }

    const sendData = useSelector((state:RootState) => state.combinedChat.sendData)

  return (
    <ChatInput value={sendData?.message} onChange={handleChange} onSend={onSend} >
    <Button>SetBlaball</Button>
  </ChatInput>
  )
}

export default ChatSettings