import { Outlet } from "react-router-dom";
import Navigation from "./_components/navigation/navigation";

function MainLayout() {
  return (
    <div className="flex">
      <div className="border-r h-screen sticky top-0 w-16 shrink-0">
        <Navigation />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
