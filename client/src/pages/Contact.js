import React from "react";
import Layout from "../components/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

function Contact() {
  return (
    <Layout title="Contact Us - Swifto">
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark my-4 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            If you have a question or concern, our customer support team is
            available 24/7 to assist you. You can reach us by phone, email, or
            live chat, and we'll do our best to resolve any issue as quickly and
            efficiently as possible.
          </p>
          <p className="mt-3">
            <BiMailSend /> : Hello@swifto.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
