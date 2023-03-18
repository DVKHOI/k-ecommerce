import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBrand,
  // deleteBrand,
  getAllBrands,
  resetState,
} from "../../features/brand/brandSlice";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { CustomModel } from "../../components";
const columns = [
  {
    title: "No",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Actions",
    dataIndex: "actions",
  },
];

const BrandList = () => {
  const [open, setOpen] = useState(false);
  const [brandId, setBrandId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setBrandId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getAllBrands());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // delete brand
  const handleDeleteBrand = (id) => {
    setOpen(false);
    dispatch(deleteBrand(id));
    setTimeout(() => {
      dispatch(getAllBrands());
    }, 200);
  };
  const { brands } = useSelector((state) => state.brand);
  console.log("🚀 ~ file: BrandList.jsx:54 ~ BrandList ~ brands:", brands);
  const data1 = [];
  for (let i = 0; i < brands?.length; i++) {
    data1.push({
      key: i + 1,
      title: brands[i]?.title,
      actions: (
        <>
          <Link
            className="fs-3 ms-3 text-danger"
            to={`/admin/brand/${brands[i]?._id}`}
          >
            <BiEdit />
          </Link>
          <button
            className="fs-3 ms-3 text-danger bg-transparent border-0"
            onClick={() => showModal(brands[i]?._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  return (
    <>
      <h3 className="mb-4 title">Brand List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModel
        hideModal={hideModal}
        open={open}
        performAction={() => {
          handleDeleteBrand(brandId);
        }}
        title="Are you sure you want to delete this brand ?"
      />
    </>
  );
};

export default BrandList;
