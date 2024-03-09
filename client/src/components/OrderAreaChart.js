import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const OrderAreaChart = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/auth/all-orders`
        );
        const orders = response.data;

        // Group orders by month and calculate revenue and profit
        const monthlyData = orders.reduce((acc, order) => {
          const month = new Date(order.createdAt).toLocaleString("default", {
            month: "short",
          });
          const revenue = order.products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
          );
          const profit = revenue * 0.5; // Assuming profit is half of revenue
          acc[month] = {
            month,
            revenue,
            profit,
          };
          return acc;
        }, {});

        // Convert object to array
        const formattedData = Object.values(monthlyData);

        setOrderData(formattedData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <AreaChart
          data={orderData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            stackId="1"
            stroke="#656363"
            fill="#656363"
          />
          <Area
            type="monotone"
            dataKey="profit"
            stackId="1"
            stroke="#BDBAB9 "
            fill="#BDBAB9 "
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderAreaChart;
