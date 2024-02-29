import React from "react";
import { Layout } from "../../components/Layout";
import { AdminMenu } from "../../components/AdminMenu";

const User = () => {
  return (
    <Layout>
      <div className="container-fluid m-2 p-2">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default User;
