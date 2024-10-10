import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isAuthenticatedState,
  userLoggedIn,
  userLoggedOut,
} from "@/redux-rtk-v2/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { loginUrl } from "@/config-v2/constants";

export default function useAuthCheck() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxAuth = useSelector(isAuthenticatedState);
  const [isApiCalled, setIsApiCalled] = useState(false);

  

  const checkAuth = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}auth/profile`,
        {
          credentials: "include",
        },
      );
      const data = await response.json();
      if (response.status === 200 && data.data) {
        setIsApiCalled(true);
        dispatch(
          userLoggedIn({
            user: data.data,
          }),
        );
      } else {
        setIsApiCalled(true);
        dispatch(userLoggedOut());
        navigate(loginUrl);
      }
    } catch (err) {
      console.error(err);
      setIsApiCalled(true);
      dispatch(userLoggedOut());
      navigate(loginUrl);
    }
  };

  useEffect(() => {
    if (!reduxAuth) {
      checkAuth();
    } else {
      setIsApiCalled(true);
    }
  }, []);

  return { reduxAuth, isApiCalled };
}
