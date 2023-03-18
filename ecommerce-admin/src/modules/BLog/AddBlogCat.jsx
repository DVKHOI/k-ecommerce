import React from "react";
import { CustomInput } from "../../components";

const AddBlogCat = () => {
  return (
    <div>
      <h3 className="mb-4 title">Add Blog Category</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter Blog Category" />
          <button className="btn btn-success rounded mt-4">
            Add Blog Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogCat;
