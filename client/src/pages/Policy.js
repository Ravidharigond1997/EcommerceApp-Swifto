import React from "react";
import Layout from "./../components/Layout";

const Policy = () => {
  return (
    <Layout title="Privacy Policy - Swifto">
      <div className="row contactus ">
        <div className="col-md-6">
          <img
            src="/images/privacy_policy.jpg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark text-white text-center">Privacy Policy</h1>
          <p className="p-2">
            Personal information collection: Explain what personal information
            your app collects from users, such as name, email address, and
            payment information, and how this information is used.
          </p>
          <p className="p-2">
            Data storage and security: Describe how you store and protect user
            data, including measures you take to ensure the security of user
            information.
          </p>
          <p className="p-2">
            User rights: Outline the rights that users have regarding their
            personal information, such as the right to access or delete their
            data, and explain how users can exercise these rights.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
