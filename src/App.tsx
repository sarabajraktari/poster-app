import { ReactElement } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import {
  AboutUsPage,
  ContactPage,
  HomePage,
  RegisterPage,
  LoginPage,
} from "@pages";
import { AuthRoute } from "components/auth-route/AuthRoute";

function App(): ReactElement {
  return (
    <>
      <Outlet />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<AuthRoute />}>
          <Route path="/posts" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
