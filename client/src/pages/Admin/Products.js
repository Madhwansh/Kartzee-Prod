import React, { useState, useEffect } from "react";
import { AdminMenu } from "../../components/AdminMenu";
import { Layout } from "../../components/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product`
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="container-fluid m-2 p-2">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Products </h1>
            <h5 className="mb-4">Click on edit button to update product</h5>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.map((p, index) => (
                  <tr key={p._id}>
                    <td>{indexOfFirstProduct + index + 1}</td>
                    <td>
                      <img
                        src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                        alt={p.name}
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                        }}
                      />
                    </td>
                    <td>{p.name}</td>
                    <td>{p.description}</td>
                    <td>${p.price}</td>
                    <td>
                      <Link to={`/dashboard/admin/product/${p.slug}`}>
                        <button className="btn btn-dark">Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav>
              <ul className="pagination">
                {Array.from({
                  length: Math.ceil(products.length / productsPerPage),
                }).map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      onClick={() => paginate(index + 1)}
                      className="page-link"
                    >
                      {index + 1}
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

export default Products;
