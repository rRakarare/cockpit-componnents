import { loginUrl } from "@/config-v2/constants";
import useAuthCheck from "@/lib-v2/hooks/useAuthCheck";
import { Navigate, Outlet } from "react-router-dom";

const AuthCheck = () => {
  // globals
  const {reduxAuth, isApiCalled} = useAuthCheck()

    if (!isApiCalled) {
        return null
    }

  switch (reduxAuth) {
    case true:
      return <Outlet />;
    case false:
      return <Navigate to={loginUrl} />;
  }
};

export default AuthCheck;
