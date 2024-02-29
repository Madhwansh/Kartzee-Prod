import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { useAuth } from "../context/auth.js";
import { toast } from "react-toastify";
import SearchInput from "./Form/SearchInput.js";
import { useCart } from "../context/cart.js";
import { Badge } from "antd";
import { FaShoppingCart } from "react-icons/fa";

export const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const handleLogout = () => {
    console.log("Logging out...");
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logged Out");
    console.log("Logged out successfully.");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "70px", width: "auto" }}
            />
            KARTZEE
          </Link>

          <SearchInput />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                  exact
                  style={{ marginRight: "15px" }}
                >
                  Home
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link"
                      activeClassName="active"
                      style={{ marginRight: "15px" }}
                    >
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      activeClassName="active"
                      style={{
                        marginRight: "15px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Sign in
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item-dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li className="dropdown-item">
                        <NavLink
                          to={`dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="nav-link dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li className="dropdown-item">
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="nav-link dropdrown-item"
                          activeClassName="active"
                          style={{
                            marginRight: "15px",
                            transition: "color 0.3s ease",
                          }}
                        >
                          Sign Out
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Badge color="#000000" count={cart?.length} showZero>
                  <NavLink
                    to="/cart"
                    className="nav-link"
                    activeClassName="active"
                    style={{
                      marginRight: "15px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    <FaShoppingCart size={30} color="#000000" />
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
