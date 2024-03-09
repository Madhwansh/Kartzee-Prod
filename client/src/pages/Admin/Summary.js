import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { AdminMenu } from "../../components/AdminMenu";
import axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import ProductCategoryBarChart from "../../components/ProductCategoryBarChart";
import OrderAreaChart from "../../components/OrderAreaChart";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
} from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import "react-big-calendar/lib/css/react-big-calendar.css";

const Summary = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/product/get-product`
        );
        const { countTotal } = response.data;
        setTotalProducts(countTotal);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/auth/all-orders`
        );
        const ordersData = response.data;
        const totalOrders = ordersData.length;
        setTotalOrders(totalOrders);
        setOrders(ordersData);

        // Calculate total revenue
        const totalRevenue = ordersData.reduce(
          (acc, order) => acc + parseFloat(order.payment.transaction.amount),
          0
        );
        setTotalRevenue(totalRevenue);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/auth/all-users`
        );
        const { totalUsers } = response.data;
        setTotalUsers(totalUsers);
      } catch (error) {
        console.log("Error fetching users");
      }
    };

    fetchProducts();
    fetchOrders();
    fetchUsers();
  }, []);

  const localizer = momentLocalizer(moment);

  const eventStyleGetter = () => ({
    style: {
      backgroundColor: "black",
      color: "white",
    },
  });

  const events = orders.map((order) => ({
    title: `Order ID: ${order._id}`,
    start: new Date(order.createdAt),
    end: new Date(order.createdAt),
  }));

  return (
    <Layout>
      <div className="container-fluid m-2 p-2">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="mb-4">Summary</h1>
            <div className="main-cards">
              <div className="card">
                <div className="card-inner">
                  <h3>
                    Total Products <BsFillArchiveFill size={24} />
                  </h3>
                </div>
                <h1>{totalProducts}</h1>
              </div>
              <div className="card">
                <div className="card-inner">
                  <h3>
                    Total Orders <BsFillGrid3X3GapFill size={24} />
                  </h3>
                </div>
                <h1>{totalOrders}</h1>
              </div>

              <div className="card">
                <div className="card-inner">
                  <h3>
                    Total Customers <BsPeopleFill size={24} />
                  </h3>
                </div>
                <h1>{totalUsers}</h1>
              </div>
              <div className="card">
                <div className="card-inner">
                  <h3>
                    Total Revenue <FaMoneyCheckAlt size={24} />
                  </h3>
                </div>
                <h1>${totalRevenue}</h1>
              </div>
            </div>
            <hr className="mt-4 mb-4" />
            <div className="row mt-4">
              <div className="col-md-6">
                <h2>Category to Product Ratio</h2>
                <ProductCategoryBarChart />
              </div>
              <div className="col-md-6">
                <h2>Revenue Profit by Month</h2>
                <OrderAreaChart />
              </div>
            </div>
            <hr className="mt-4 mb-4" />
            <h2 className="mb-2">Order Calendar</h2>
            <div className="calendar-container">
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                eventStyleGetter={eventStyleGetter}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Summary;
