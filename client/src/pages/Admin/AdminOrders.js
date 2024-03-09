import React, { useState, useEffect } from "react";
import { AdminMenu } from "../../components/AdminMenu.js";
import { Layout } from "../../components/Layout.js";
import axios from "axios";
import moment from "moment";
import { useAuth } from "../../context/auth.js";
import { Select } from "antd";
import { Option } from "antd/es/mentions/index.js";

const { Options } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ]);

  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/all-orders`
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/auth/order-status/${orderId}`,
        {
          status: value,
        }
      );
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Orders</h1>
          {currentOrders.map((order, index) => (
            <div key={index} className="border shadow">
              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">status</th>
                      <th scope="col">Buyer</th>
                      <th scope="col">Date</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{indexOfFirstOrder + index + 1}</th>
                      <th>
                        <Select
                          bordered={false}
                          onChange={(value) => handleChange(order._id, value)}
                          defaultValue={order?.status}
                        >
                          {status.map((s, i) => (
                            <Option key={i} value={s}>
                              {s}
                            </Option>
                          ))}
                        </Select>
                      </th>
                      <th>{order?.buyer?.name}</th>
                      <th>{moment(order?.createdAt).fromNow()}</th>
                      <th>{order?.payment.success ? "Success" : "Failed"}</th>
                      <th>{order?.products?.length}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="container">
                <h5>Products ordered by {order?.buyer?.name}:</h5>
                {order?.products?.map((product, productIndex) => (
                  <div className="row mb-2 p-3 card flex-row" key={product._id}>
                    <div className="col-md-1">
                      <p>{productIndex + 1}.</p>
                    </div>
                    <div className="col-md-3">
                      <img
                        src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                        className="img-top rounded-circle img-fluid"
                        alt={product.name}
                        width="100"
                        height="100"
                      />
                    </div>
                    <div className="col-md-8">
                      <p>{product.name}</p>
                      <p>{product.description}</p>
                      <p>Price: ${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* Pagination */}
          <nav className="mt-4">
            <ul className="pagination">
              {ordersPerPage > 0 &&
                Array(Math.ceil(orders.length / ordersPerPage))
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
    </Layout>
  );
};

export default AdminOrders;
