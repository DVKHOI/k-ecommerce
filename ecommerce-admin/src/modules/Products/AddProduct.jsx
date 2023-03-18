import React, { useState } from "react";
import { CustomInput, FormInput } from "../../components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const AddProduct = () => {
  const [desc, setDesc] = useState("");
  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form action="">
          <FormInput>
            <CustomInput type="text" label="Enter your title" />
            <CustomInput type="text" label="Enter your slug" />
          </FormInput>
          <FormInput>
            <select name="" id="" className="form-control py-3 mb-3">
              <option value="">Select Category</option>
              <option value="">Category 1</option>
              <option value="">Category 1</option>
              <option value="">Category 1</option>
            </select>
            <select name="" id="" className="form-control py-3 mb-3">
              <option value="">Select Brand</option>
              <option value="">Brand 1</option>
              <option value="">Brand 1</option>
              <option value="">Brand 1</option>
            </select>
          </FormInput>
          <div>
            <label htmlFor="">Description</label>
            <ReactQuill
              theme="snow"
              value={desc}
              onChange={setDesc}
              className="mb-3"
            />
          </div>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
          <button className="btn btn-success rounded mt-4 px-5 py-2 mx-auto d-block">
            Add Color
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
