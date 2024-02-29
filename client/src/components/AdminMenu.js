import React from "react";
import { NavLink } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";

export const AdminMenu = () => {
  return (
    <div className="text-center ">
      <h2>Admin Panel</h2>
      <div className="list-group">
        <NavLink
          to="/dashboard/admin/create-category"
          className="list-group-item list-group-item-action "
        >
          <BiCategory size={40} className="p-2 mr-2" />
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="list-group-item list-group-item-action "
        >
          <FaCartPlus size={40} className="p-2 mr-2" />
          Create Product
        </NavLink>

        <NavLink
          to="/dashboard/admin/products"
          className="list-group-item list-group-item-action "
        >
          <FaListUl size={40} className="p-2 mr-2" />
          All Products
        </NavLink>

        <NavLink
          to="/dashboard/admin/orders"
          className="list-group-item list-group-item-action"
        >
          <FaListUl size={40} className="p-2 mr-2" />
          All Orders
        </NavLink>

        <NavLink
          to="/dashboard/admin/users"
          className="list-group-item list-group-item-action "
        >
          <FaUser size={40} className="p-2 mr-2" />
          Users
        </NavLink>
      </div>
    </div>
  );
};
