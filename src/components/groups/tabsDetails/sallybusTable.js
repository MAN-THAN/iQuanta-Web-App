import React from "react";
import { Table } from "antd";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
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
      <Box>
        <UnorderedList fontSize="14px" spacing="4" py="6">
          <ListItem>
            There will be a total of <strong>100 questions</strong> in the CAT 2021.
          </ListItem>
          <ListItem>
            The questions will be a <strong>mixture of objective and subjective </strong> type questions.
          </ListItem>
          <ListItem>For each correct answer, candidates will score 3 marks.</ListItem>
          <ListItem>
            For each wrong answer in the objective questions, candidates will get a{" "}
            <strong> negative marking of 1 mark.</strong>
          </ListItem>
        </UnorderedList>
      </Box>

      <Table  columns={columns} dataSource={data} bordered pagination={false} />
    </>
  );
};

export default SallybusTable;
