import { Box, Divider, HStack, Image, Text } from "@chakra-ui/react";
import { Progress } from "antd";
import React from "react";

const CollegeList = () => {
  return (
    <>
      <Box>
        <Divider size="15px" py="2" />
        {[...Array(6)].map(() => (
          <>
            <HStack py="4" px="4" alignItems="flex-start" justifyContent="space-between">
              <HStack gap="6">
                <Box boxSize="30px">
                  <Image width="100%" src="/greenCheck.svg" alt="Checked" />
                </Box>
                <Box>
                  <Text fontSize="16px" fontWeight="600">
                    GKIC
                  </Text>
                  <Text fontSize="14px" fontWeight="400">
                    Yha Pdhai Kam Badmasi hoti hai
                  </Text>
                </Box>
              </HStack>
              <Box>
                <Progress strokeWidth="10" strokeColor="#24B670" type="circle" percent={80} size={40} />
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
