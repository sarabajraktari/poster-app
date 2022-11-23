import { AuthContext } from "@context";
import { useContext } from "react";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
