import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout(props) {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <title>{props.title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <ToastContainer />
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Swifto",
  description: "Swifto is a Ecommerce Application",
  keywords: "Swifto, Ecommerce, React, Node.js, Express, MongoDB",
  author: "Ravi",
};

export default Layout;
