import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { AdminMenu } from "../../components/AdminMenu";
import axios from "axios";
import { toast } from "react-toastify";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);

      const { data } = axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/create-product`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product is Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="container-fluid m-2 p-2">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Add Product</h1>
            <div className="m-1 w-75">
              <label htmlFor="category">Category:</label>
              <Select
                id="category"
                bordered={false}
                placeholder="Select a Category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>

              <label htmlFor="photo" className="btn btn-outline-dark col-md-12">
                {photo ? photo.name : "Select photo"}
                <input
                  id="photo"
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                />
              </label>

              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>

              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                value={name}
                placeholder="Enter a Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                type="text"
                value={description}
                placeholder="write a description"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />

              <label htmlFor="price">Price:</label>
              <input
                id="price"
                type="number"
                value={price}
                placeholder="write a Price"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />

              <label htmlFor="quantity">Quantity:</label>
              <input
                id="quantity"
                type="number"
                value={quantity}
                placeholder="write a quantity"
                className="form-control"
                onChange={(e) => setQuantity(e.target.value)}
              />

              <label htmlFor="shipping">Shipping:</label>
              <Select
                id="shipping"
                bordered={false}
                placeholder="Select Shipping "
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setShipping(value);
                }}
              >
                <Option value="0">No</Option>
                <Option value="1">Yes</Option>
              </Select>

              <button className="btn btn-dark" onClick={handleCreate}>
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
