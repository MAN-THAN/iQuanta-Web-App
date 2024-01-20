import { Box, Divider, HStack, Image, Text } from "@chakra-ui/react";
import { Progress } from "antd";
import React from "react";

const CollegeList = ({data}) => {
  
  return (
    <>
      <Box>
        <Divider size="15px" py="2" />
        {data?.details.map((item) => (
          <>
            <HStack py="4" px="4" alignItems="flex-start" justifyContent="space-between">
              <HStack gap="6">
                <Box boxSize="30px">
                  <Image width="100%" src="/greenCheck.svg" alt="Checked" />
                </Box>
                <Box>
                  <Text fontSize="16px" fontWeight="600">
                   {item.college}
                  </Text>
                  <Text fontSize="14px" fontWeight="400">
                    Yha Pdhai Kam Badmasi hoti hai
                  </Text>
                </Box>
              </HStack>
              <Box>
                <Progress strokeWidth="10" strokeColor="#24B670" type="circle" percent={item.percentile} size={40} />
              </Box>
            </HStack>
            <Divider />
          </>
        ))}

        <Divider size="15px" py="2" />
      </Box>
    </>
  );
};

export default CollegeList;
