import { useEffect } from "react";
import { useApiResponse } from "../ApiResponseContext";

const ApiResponse = () => {
  const { response, clearResponse } = useApiResponse();

  useEffect(() => {
    if (response) {
      const timer = setTimeout(() => {
        clearResponse();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [response, clearResponse]);

  if (!response) return null;

  const { type, message } = response;
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const textColor = type === "success" ? "text-green-900" : "text-red-900";

  return (
    <div
      className={`fixed top-5 right-5 z-50 p-4 rounded-lg shadow-lg ${bgColor} ${textColor}`}
    >
      {message}
    </div>
  );
};

export default ApiResponse;
