import TextRadio from "@/components/common/textRadio";
import { quesData } from "@/utilities/qusData";
import { Box, Flex, HStack, Image, Text, useRadioGroup } from "@chakra-ui/react";
import { Calculator, Expand } from "lucide-react";
import React from "react";

const MockHeader = () => {
  const tags = ["Verbal Ability", "LRDI", "Quant"];
  console.log("🚀 ~ convert:", quesData);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Verbal Ability",
    defaultValue: "All",
    onChange: console.log,
  });
  const group = getRootProps();
  return (
    <Box width="100%">
      <Text fontSize="16px" fontWeight="600">
        Section
      </Text>
      <Flex alignItems="center" justifyContent="space-between" width="100%">
        <HStack {...group}>
          {quesData.sections.map((value, index) => {
            const radio = getRadioProps({ id: value.section });
            return (
              <TextRadio key={index} {...radio}>
                {value.name}
              </TextRadio>
            );
          })}
        </HStack>
        <HStack flexBasis="40%" alignContent="center" justifyContent="end" gap="5">
          <Box
            bg="brand.800"
            p="2"
            rounded="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize="60px"
            cursor="pointer"
          >
            <Expand />
          </Box>
          <Box
            bg="brand.800"
            p="2"
            rounded="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize="60px"
            cursor="pointer"
          >
            <Calculator />
          </Box>
          <Box bg="brand.800" p="2" rounded="xl" width="130px" textAlign="center" cursor="pointer">
            <Text fontSize="12px">Time Left</Text>
            <Text color="red" fontSize="18px" fontWeight="600">
              34:45
            </Text>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default MockHeader;
