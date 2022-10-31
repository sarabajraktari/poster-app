import { AboutUsPage } from "@pages/AboutUs";
import { ContactPage } from "@pages/Contact";
import { HomePage } from "@pages/Home";
import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
// import { AboutUsPage, ContactPage, HomePage } from "@pages";

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutUsPage />} />
    </Routes>
  );
}

export default App;
