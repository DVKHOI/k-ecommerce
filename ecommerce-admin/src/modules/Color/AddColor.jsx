import React from "react";
import { CustomInput } from "../../components";

const AddColor = () => {
  return (
    <div>
      <h3 className="mb-4 title">Add Color</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter Color" />
          <button className="btn btn-success rounded mt-4">Add Color</button>
        </form>
      </div>
    </div>
  );
};

export default AddColor;
