import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ProductCategoryBarChart = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/product/get-product`
        );
        const { products } = response.data;
        const categoryCount = {};

        // Count products for each category
        products.forEach((product) => {
          const categoryName = product.category
            ? product.category.name
            : "Uncategorized";
          categoryCount[categoryName] = (categoryCount[categoryName] || 0) + 1;
        });

        // Format data for bar chart
        const formattedData = Object.entries(categoryCount).map(
          ([category, count]) => ({
            category,
            count,
          })
        );

        setCategoryData(formattedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={categoryData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#525252" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductCategoryBarChart;
