import React from "react";
import Layout from "./../components/Layout";
import { useAuth } from "../contaxt/auth";

function Home() {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title="Shope Here - Swifto">
      <h1>Home Page</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
}

export default Home;
