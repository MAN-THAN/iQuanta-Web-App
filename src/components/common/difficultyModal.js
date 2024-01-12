import { Modal, Progress } from "antd";
import { Box, Divider, Flex, HStack, Image, RadioGroup, Stack, Text, useRadio } from "@chakra-ui/react";
import { ArrowLeft, Dot, SearchIcon, X } from "lucide-react";
import { useState } from "react";

import { useRadioGroup } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box {...checkbox} cursor="pointer">
        {props.children}
      </Box>
    </Box>
  );
}

const DifficultyModal = ({ isOpen, onClose }) => {
  const [selectValue, setSelectValue] = useState();
  const router = useRouter();
  const options = [
    {
      level: "Conceptual",
      description: "For students who wants to brush up their concept basics",
      progress: "100",
    },
    {
      level: "Medium",
      description: "For students who wants to brush up their concept basics",
      progress: "80",
    },
    {
      level: "easy",
      description: "For students who wants to brush up their concept basics",
      progress: "10",
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    onChange: (value) => {
      setSelectValue(value);
      router.push(`/practice/qa/0/${value}`);
    },
  });

  const group = getRootProps();

  return (
    <Modal
      width="460px"
      title={
        <Flex justifyContent="space-between">
          <span style={{ fontSize: "18px", fontWeight: "600" }}>Select Difficulty</span>
          <span style={{ cursor: "pointer" }} onClick={() => onClose(false)}>
            <X />
          </span>
        </Flex>
      }
      centered
      open={isOpen}
      onOk={() => onClose(false)}
      onCancel={() => onClose(false)}
      closable={false}
      footer={null}
    >
      <Stack {...group}>
        {options.map(({ level, description, progress }) => {
          const radio = getRadioProps({ value: level });
          return (
            <RadioCard key={level} {...radio}>
              <HStack py="2" alignItems="flex-start" justifyContent="center">
                {selectValue !== level ? (
                  <Box boxSize="40px">
                    <Image width="100%" src="/greyCheck.svg" alt="Checked" />
                  </Box>
                ) : (
                  <Box boxSize="40px">
                    <Image width="100%" src="/greenCheck.svg" alt="Checked" />
                  </Box>
                )}

                <Box>
                  <Text fontSize="16px" fontWeight="600">
                    {level}
                  </Text>
                  <Text fontSize="14px" fontWeight="400">
                    {description}
                  </Text>
                </Box>
                <Box>
                  <Progress strokeWidth="10" strokeColor="#24B670" type="circle" percent={progress} size={80} />
                </Box>
              </HStack>
              <Divider size="15px" py="2" />
            </RadioCard>
          );
        })}
      </Stack>
    </Modal>
  );
};

export default DifficultyModal;
