import React from "react";
import Router from "../Router/Router";
import Header from "./Header";
import Footer from "./Footer";
const Layout = (children) => {
  return (
    <>
      <Header />
      <Router>{children}</Router>
      <Footer />
    </>
  );
};

export default Layout;
