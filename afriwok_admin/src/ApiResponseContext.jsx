import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

export const ApiResponseContext = createContext();

export const ApiResponseProvider = ({ children }) => {
  const [response, setResponse] = useState(null);

  const setSuccess = (message) => setResponse({ type: "success", message });
  const setError = (message) => setResponse({ type: "error", message });
  const clearResponse = () => setResponse(null);

  return (
    <ApiResponseContext.Provider
      value={{ response, setSuccess, setError, clearResponse }}
    >
      {children}
    </ApiResponseContext.Provider>
  );
};
ApiResponseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useApiResponse = () => useContext(ApiResponseContext);
