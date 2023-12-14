import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthenticationContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error(
      "useAuthenticationContext must be inside an AuthenticationContextProvider"
    );
  }

  return context;
};
