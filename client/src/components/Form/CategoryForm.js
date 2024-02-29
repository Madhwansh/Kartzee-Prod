import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/*<h3 className="mt-2"></h3>*/}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter desired Category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
