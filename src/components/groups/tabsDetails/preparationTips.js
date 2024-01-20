import { Box, Divider, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const PreparationTipsDetails = () => {
  return (
    <>
      <Box py="6" px="4">
        <Text fontSize="18px" fontWeight="600" pt="4">
          Objectify the CAT syllabus
        </Text>
        <UnorderedList pt="4">
          <ListItem>
            <Text>
              Make a chart of the entire syllabus and have it placed on your study desk so that it is always in sight.
              Have a <strong>very structured approach to the syllabus;</strong>first, go through all the topics which
              are familiar, then proceed with new topics.
            </Text>
          </ListItem>
        </UnorderedList>
        <Text fontSize="18px" fontWeight="600" pt="4">
          Strategize the Study Plan
        </Text>
        <UnorderedList pt="4">
          <ListItem>
            <Text>
              Have a clear plan regarding your CAT preparations.
              <strong> Go through the entire syllabus before starting the preparation.</strong>
            </Text>
          </ListItem>
        </UnorderedList>
        <Text fontSize="18px" fontWeight="600" pt="4">
          Have Basics on Your Fingertips
        </Text>
        <UnorderedList pt="4">
          <ListItem>
            <Text>
              The biggest truth about the CAT exam which most of the CAT Aspirants fail to acknowledge is the fact that
              the entire
              <strong>
                CAT Syllabus consists of topics which you have already covered in your 8th, 9th and 10th grades.
              </strong>
            </Text>
          </ListItem>
        </UnorderedList>
        <Text fontSize="18px" fontWeight="600" pt="4">
          Shortcut Techniques and Strategies
        </Text>
        <UnorderedList pt="4">
          <ListItem>
            <Text>
              Efficient time management is the key.{" "}
              <strong> On an average, a candidate has to solve a question in less than 90 seconds.</strong>
              Knowing a few shortcut techniques and tricks always help a candidate toz solve the problem in stipulated
              time
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
      <Divider />
    </>
  );
};

export default PreparationTipsDetails;
