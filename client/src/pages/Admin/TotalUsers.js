import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { AdminMenu } from "../../components/AdminMenu";
import axios from "axios";

const TotalUsers = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/auth/all-users`
        );
        if (Array.isArray(response.data.users)) {
          setUsers(response.data.users);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="container-fluid m-2 p-2">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Total Users</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Joined At</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user, index) => (
                  <tr key={user._id}>
                    <td>{indexOfFirstUser + index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.address || "-"}</td>
                    <td>{new Date(user.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <nav>
              <ul className="pagination">
                {usersPerPage > 0 &&
                  Array(Math.ceil(users.length / usersPerPage))
                    .fill()
                    .map((_, i) => (
                      <li key={i} className="page-item">
                        <button
                          onClick={() => paginate(i + 1)}
                          className="page-link"
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TotalUsers;
