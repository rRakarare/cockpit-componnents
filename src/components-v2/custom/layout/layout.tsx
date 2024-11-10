import { Outlet } from "react-router-dom";
import Navigation from "./navigation/navigation";

function MainLayout() {
  return (
    <div className="flex">
      
        <Navigation />
  
        <div className="flex-1 max-w-full">
        <Outlet />
        </div>
  
    </div>
  );
}

export default MainLayout;
