import {
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import ClassToggle from "./classToggle";

const ClassListTeacher = () => {
  return (
    <>
      <UnorderedList padding="0" listStyleType="none" spacing="24">
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
