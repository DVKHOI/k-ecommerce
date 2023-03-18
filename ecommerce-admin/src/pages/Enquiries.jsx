import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "No",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

const data1 = [];
for (let i = 1; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: Math.floor(Math.random() * 32),
    status: `London, Park Lane no. ${i}`,
  });
}
const Enquiries = () => {
  return (
    <>
      <h3 className="mb-4">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </>
  );
};

export default Enquiries;
