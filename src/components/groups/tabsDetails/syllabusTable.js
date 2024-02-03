import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Subject",
    dataIndex: "name",
    style: { background: "#f0f0f0", padding: "8px", borderRadius: "4px" },
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Topics",
    className: "column-money",
    dataIndex: "topic",
    align: "right",
  },
  {
    title: "Marks alloted",
    dataIndex: "marks",
  },
  {
    title: "No of Qustion",
    dataIndex: "qustion",
  },
];
const data = [
  {
    key: "1",
    name: "Verbal & Reading Comprehension",
    topic: "Long & Short Passages",
    marks: "102",
    qustion: "34",
  },
  {
    key: "1",
    name: "Verbal & Reading Comprehension",
    topic: "Long & Short Passages",
    marks: "102",
    qustion: "34",
  },
  {
    key: "1",
    name: "Verbal & Reading Comprehension",
    topic: "Long & Short Passages",
    marks: "102",
    qustion: "34",
  },
  {
    key: "1",
    name: "Verbal & Reading Comprehension",
    topic: "Long & Short Passages",
    marks: "102",
    qustion: "34",
  },
];
const SallybusTable = () => {
  return (
    <>
      <Table columns={columns} dataSource={data} bordered pagination={false} />
    </>
  );
};

export default SallybusTable;
