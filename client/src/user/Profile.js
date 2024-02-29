import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import UserMenu from "../components/UserMenu";
import { useAuth } from "../context/auth";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //getting user data

  useEffect(() => {
    const { email, name, phone, address, password } = auth.user;
    setName(name);
    setEmail(email);
    setPhone(phone);
    setAddress(address);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/auth/profile`,
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let loc = localStorage.getItem("auth");
        loc = JSON.parse(loc);
        loc.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(loc));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="container-fluid m-2 p-2">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="reg-container">
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-lg-12 col-xl-11">
                    <div
                      className="card text-black"
                      style={{ borderRadius: 25 }}
                    >
                      <div className="card-body p-md-2">
                        <div className="row justify-content-center">
                          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p className="text-center h3 fw-bold mb-3 mx-1 mx-md-4 mt-2">
                              Update Desired Field
                            </p>
                            <form
                              className="mx-1 mx-md-4"
                              onSubmit={handleSubmit}
                            >
                              {" "}
                              {/* Added onSubmit handler */}
                              <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  id="name"
                                  className="form-control"
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="form-control"
                                  disabled
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="password"
                                  className="form-label"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  id="password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  className="form-control"
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="phone" className="form-label">
                                  Phone
                                </label>
                                <input
                                  type="tel"
                                  id="phone"
                                  className="form-control"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                  Address
                                </label>
                                <textarea
                                  id="address"
                                  className="form-control"
                                  rows="3"
                                  value={address}
                                  onChange={(e) => setAddress(e.target.value)}
                                ></textarea>
                              </div>
                              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button
                                  type="submit"
                                  className="btn btn-dark btn-lg"
                                >
                                  {" "}
                                  {/* Changed type to "submit" */}
                                  Update
                                </button>
                              </div>
                            </form>
                          </div>
                          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                              className="img-fluid"
                              alt="Sample image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
