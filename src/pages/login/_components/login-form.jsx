import { Button } from "@/components-v2/ui/button";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  return (
    <Button className="w-full" onClick={() => navigate("/")}>
      Login
    </Button>
  );
}

export default LoginForm;
