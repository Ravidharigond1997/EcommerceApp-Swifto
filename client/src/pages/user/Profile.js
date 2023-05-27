import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import UserMenu from "../../components/UserMenu";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../contaxt/auth";

function Profile() {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  //get user data
  useEffect(() => {
    const { name, email, phone, address, password } = auth?.user;
    setName(name);
    setEmail(email);
    setPhone(phone);
    setAddress(address);
    setPassword(password);
  }, [auth?.user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/v1/auth/profile`, {
        name,
        email,
        phone,
        address,
        password,
      });
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data?.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Dashboard - User Profile">
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="form-container" title="Register Swifto">
              <h1 className="title">User Profile</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="exampleInputEmail"
                    placeholder="Enter Your Email"
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    id="exampleInputPhone"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="form-control"
                    id="exampleInputPassword"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    className="form-control"
                    id="exampleInputAddress"
                    placeholder="Enter Your Address"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
