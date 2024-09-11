import { Link } from "react-router-dom";
import CockpitLogo from "../logo";
import ChatHistory from "./chat-history";
import NavLinks from "./navlinks";
import Settings from "./settings";

function Navigation() {
  return (
    <div className="flex flex-col h-full">
      <div id="top" className="border-b flex items-center justify-center h-topbar">
        <Link to="/" className="flex justify-center">
          <CockpitLogo className="size-8 mx-auto" />
        </Link>
      </div>
      <div
        id="mid"
        className="overflow-y-auto overflow-x-hidden flex-grow flex flex-col items-center space-y-2 py-2"
      >
        <NavLinks />
        <ChatHistory />
      </div>
      <div id="bot" className="py-3 flex justify-center border-t">
        <Settings />
      </div>
    </div>
  );
}

export default Navigation;
