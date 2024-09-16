import { imageChats } from "@/config/chat/image-chat/example-data";
import { useParams } from "react-router-dom";

function Page() {

  const {id} = useParams<{id: string}>();

  const imageChat = imageChats.find((chat) => chat._id === id);

  return (
    <div className="flex flex-col h-screen">
      <div className="my-topbar pb-4 size-full overflow-y-auto flex items-center justify-center flex-col space-y-4">
        <div className="border p-4 rounded-xl shadow-sm">
          {imageChat?.messages[0].content}
        </div>
        <div className="flex">
        <img className="object-fit p-4 size-96 shadow-sm m-4 hover:scale-110 transition-all border" src={imageChat?.messages[1].content}/>
        <img className="object-fit p-4 size-96 shadow-sm m-4 hover:scale-110 transition-all border" src={imageChat?.messages[1].contentTwo}/>
        </div>
      </div>
    </div>
  );
}

export default Page;
