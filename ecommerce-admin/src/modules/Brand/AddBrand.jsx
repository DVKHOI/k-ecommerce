import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomInput } from "../../components";
import {
  createBrand,
  getBrand,
  resetState,
  updateBrand,
} from "../../features/brand/brandSlice";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

let schema = Yup.object().shape({
  title: Yup.string().required("Brand Name is required"),
});

const AddBrand = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getBrandId = location.pathname.split("/")[3];
  const newBrand = useSelector((state) => state.brand);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBrand,
    brandName,
    updatedBrand,
  } = newBrand;
  const navigate = useNavigate();
  useEffect(() => {
    if (getBrandId !== undefined) {
      dispatch(getBrand(getBrandId));
    } else {
      dispatch(resetState());
    }
  }, [getBrandId]);

  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("Brand Added Successfully");
    }
    if (updatedBrand && isSuccess) {
      toast.success("Brand Updated Successfully");
      navigate("/admin/list-brand");
    }
    if (isError) {
      toast.error("Something went Wrong");
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: brandName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      if (getBrandId !== undefined) {
        const data = { id: getBrandId, brandData: values };
        dispatch(updateBrand(data));
      } else {
        dispatch(createBrand(values));
        formik.resetForm();
        // setTimeout(() => {
        //   dispatch(resetState());
        //   navigate("/admin/list-brand");
        // }, 300);
      }
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">
        {getBrandId !== undefined ? "Edit" : "Add"} Brand
      </h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Enter Brand"
            name="title"
            onCh={formik.handleChange("title")}
            val={formik.values.title}
            onBlr={formik.handleBlur("title")}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getBrandId !== undefined ? "Update" : "Add"} Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
