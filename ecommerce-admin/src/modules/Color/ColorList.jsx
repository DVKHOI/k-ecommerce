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
    title: "Colors",
    dataIndex: "colors",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const arrStatus = ["Pending", "Success", "Failed"];
const data1 = [];
for (let i = 1; i <= 10; i++) {
  data1.push({
    key: i,
    name: `Colors ${i}`,
    colors: Math.floor(Math.random() * 32),
    status: arrStatus[Math.floor(Math.random() * 3)],
  });
}
const ColorList = () => {
  return (
    <>
      <h3 className="mb-4 title">Color List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </>
  );
};

export default ColorList;
