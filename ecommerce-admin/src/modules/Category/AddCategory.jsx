import React from "react";
import { CustomInput } from "../../components";

const AddCategory = () => {
  return (
    <div>
      <h3 className="mb-4 title">Add Category</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter Category" />
          <button className="btn btn-success rounded mt-4">Add Category</button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
