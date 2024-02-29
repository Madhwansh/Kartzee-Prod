import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ToastContainer } from "react-toastify";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "85vh" }}>
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </div>
  );
};
