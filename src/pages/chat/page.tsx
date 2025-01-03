import { useNavigate } from "react-router-dom";
import ChatSettings from "./_components/ChatSettings";
import CockpitLogoBackGround from "@/components-v2/custom/unsorted/backLogo";


function Page() {

  const navigate = useNavigate();



  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute -z-30">
      <CockpitLogoBackGround className="w-[1000px] " />
      </div>

    
    
      <div className="w-[768px] flex flex-col space-y-6 items-center">
        <h2 className="text-4xl font-bold">Willkommen im Chat!</h2>
      <div className="w-full">
      <ChatSettings openOnRender onSend={()=>navigate(`/chat/newChat`, { state: { startStream: true } })}  />
      </div>
      </div>
    
    </div>
  );
}

export default Page;


