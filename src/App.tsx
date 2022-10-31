import { ReactElement, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getPosts } from "./api/poster";
import Layout from "./components/layout/Layout";
import { PostsProps } from "./interfaces/Posts.props";
import AboutUsPage from "./pages/AboutUs";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";

const App = (): ReactElement => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
