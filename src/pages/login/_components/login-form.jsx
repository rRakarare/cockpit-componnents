import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  return <Button className="w-full" onClick={() => navigate("/chat")}>Login</Button>;
}

export default LoginForm;
