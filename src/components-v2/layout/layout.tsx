import { Outlet } from "react-router-dom";
import Navigation from "./navigation/navigation";

function MainLayout() {
  return (
    <div className="flex">
      
        <Navigation />
        {/* <div className="bg-red-400 w-12 h-screen fixed top-0">
          asd
        </div> */}

  
        <div className="flex-1 max-w-full">
        <Outlet />
        </div>
  
    </div>
  );
}

export default MainLayout;
