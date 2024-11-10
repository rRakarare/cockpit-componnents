import { Button } from "@/components-v2/ui/button";
import { loginUrl } from "@/config-v2/constants";
import { useLogoutMutation } from "@/redux-rtk-v2/features/auth/authApi";
import { userLoggedOut } from "@/redux-rtk-v2/features/auth/authSlice";
import { LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    // @ts-ignore
    logout().then(() => {
      dispatch({ type: "RESET" }); // Dispatch the reset action to clear all states
      dispatch(userLoggedOut());
      navigate(loginUrl);
    });
  };

  return (
    <Button onClick={() => handleLogout()}>
      <LogOut className="size-4 mr-2" /> logout
    </Button>
  );
}

export default Logout;
