import React from "react";
import { Timeline } from "antd";
import { Box, Divider, HStack, Text } from "@chakra-ui/react";

const ExamTabDetails = () => {
  // Define an array of events
  const events = [
    {
      date: "First Week, Aug '21",
      description: "CAT 2021 registration date starts",
    },
    {
      date: "Second Week, Sep '21",
      description: "CAT 2021 registration deadline",
    },
    {
      date: "Second Week, Sep '21",
      description: "CAT 2021 registration deadline",
    },
    {
      date: "Second Week, Sep '21",
      description: "CAT 2021 registration deadline",
    },
    {
      date: "Second Week, Sep '21",
      description: "CAT 2021 registration deadline",
    },
    {
      date: "Second Week, Sep '21",
      description: "CAT 2021 registration deadline",
    },
    {
      date: "Second Week, Sep '21",
      description: "CAT 2021 registration deadline",
    },

    // Add more events as needed
  ];

  return (
    <>
      <div className="flex justify-between p-2">
        <div className="">
          <div className="py-4">
            <p className="text-md font-[400] font-inter text-gray-700">
              CAT 2021 registration is likely to begin in July and close by the end of September. CAT 2021 result will
              be announced in the first week of January 2022.
            </p>
          </div>

          <div className="">
            <h6 className="text-base text-gray-700 font-semibold">Exam Dates & Registration</h6>

            <div className="overflow-y-scroll mt-4 scroll-smooth">
              <Timeline className="custom-class mt-5">
                {events.map((event, index) => (
                  <Box key={index}>
                    <HStack pb="6" gap="20%" fontSize="16px">
                      <Text fontWeight="600">{event.date}</Text>
                      <Text>{event.description}</Text>
                    </HStack>
                    <Divider size="lg" />
                  </Box>
                ))}
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamTabDetails;
