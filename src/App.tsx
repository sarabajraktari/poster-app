import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutUsPage,
  ContactPage,
  HomePage,
  RegisterPage,
  LoginPage,
} from "@pages";

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/posts" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
