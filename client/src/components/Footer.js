import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">All Rights Reserved &copy; Mady</h4>
      <p className="text-center mt-3 ">
        <Link className="p-2 " to="/about">
          About Us
        </Link>
        <Link className="p-2" to="/contact">
          Contact Us
        </Link>
      </p>
    </div>
  );
};
