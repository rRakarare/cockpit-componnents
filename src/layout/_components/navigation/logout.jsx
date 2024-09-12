import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Logout() {

    const navigate = useNavigate();


    const handleLogout = (e) => {
      console.log(e)
      navigate("/login");
      };


  return (
    <Button onClick={()=>handleLogout()}>
        <LogOut className="size-4 mr-2" /> logout
    </Button>
  )
}

export default Logout