import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
    <Navbar />
    <main className="flex-1 pt-24">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
