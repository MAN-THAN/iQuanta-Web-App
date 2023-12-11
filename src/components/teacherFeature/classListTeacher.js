import { ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import ClassToggle from "./classToggle";

const ClassListTeacher = () => {
  return (
    <>
      <UnorderedList  listStyleType="none" spacing="5">
        {[...Array(5)].map((data, index) => (
          <ListItem key={index}>
            <ClassToggle />
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default ClassListTeacher;
