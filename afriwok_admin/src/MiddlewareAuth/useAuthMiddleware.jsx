import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useAuthMiddleware = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken, navigate]);

  return !!authToken; 
};