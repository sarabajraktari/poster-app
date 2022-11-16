import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthRoute = (): ReactElement => {
  const isLoggedIn = localStorage.getItem("userId");
  return isLoggedIn ? <Outlet /> : <Navigate to={{ pathname: "/login" }} />;
};
