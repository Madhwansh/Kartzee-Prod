import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
const UserMenu = () => {
  return (
    <div className="text-center">
      <h2>User Panel</h2>
      <div className="list-group">
        <NavLink
          to="/dashboard/user/orders"
          className="list-group-item list-group-item-action"
        >
          <FaCartPlus size={40} className="p-2 mr-2" />
          Orders
        </NavLink>
        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action"
        >
          <FaUser size={40} className="p-2 mr-2" />
          Profile
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
