import { Box, useRadio } from "@chakra-ui/react";
import React from "react";

const TextRadio = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        _checked={{
          bg: "#5146D6",
          color: "white",
        }}
        px={2}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default TextRadio;
