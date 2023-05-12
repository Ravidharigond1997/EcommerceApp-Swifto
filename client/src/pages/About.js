import React from "react";
import Layout from "./../components/Layout";

function About() {
  return (
    <Layout title="About Us - Swifto">
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark my-4 text-white text-center">About US</h1>
          <p className="p-2">
            Welcome to Swifto, the premier ecommerce app for Swifto. Our app is
            designed to make shopping easy and convenient, no matter where you
            are. With Swifto, you can browse through thousands of products from
            top brands and independent sellers, all in one place. Our
            user-friendly interface makes it easy to find what you're looking
            for, whether you're searching for a specific item or just browsing
            for inspiration. At Swifto, we're committed to providing our
            customers with the best possible experience. That's why we offer
            fast and reliable shipping, hassle-free returns, and 24/7 customer
            support. Whether you have a question about a product or need help
            with your order, our team is always here to help. Thank you for
            choosing Swifto for all your shopping needs. We look forward to
            serving you!
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
