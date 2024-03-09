import React from "react";
import { Layout } from "./../../components/Layout.js";
import { AdminMenu } from "../../components/AdminMenu.js";
import { useAuth } from "../../context/auth.js";

export const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container-fluid m-2 p-2">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="intro-container">
              <h1 className="intro-title">Welcome to Kartzee Dashboard!</h1>
              <div className="card w-75 p-3">
                <h3 className="admin-info">Admin Name: {auth?.user?.name}</h3>
                <h3 className="admin-info">Admin Email: {auth?.user?.email}</h3>
                <h3 className="admin-info">
                  Admin Contact: {auth?.user?.phone}
                </h3>
              </div>
              <div className="operations-container">
                <h3 className="operations-title">
                  You can perform the following operations:
                </h3>
                <ul className="operations-list">
                  <li>Create and Delete a Category</li>
                  <li>Creation, Updation, and Deletion of Products</li>
                  <li>View all Products</li>
                  <li>View all Orders</li>
                  <li>View the Summary</li>
                  <li>View all Users</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
