import { Box, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "lucide-react";
import React from "react";
import { Input } from 'antd';


const SearchInput = () => {
  return (
    <Box width='52%'>
    <Input size="large" placeholder="Search here" prefix={<SearchIcon />} />
    </Box>
  );
};

export default SearchInput;
