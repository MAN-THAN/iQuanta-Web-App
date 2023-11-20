import {  Link as ChakraLink } from "@chakra-ui/react";
import NextLink from 'next/link'

const CustomLinkItem = ({ href, children }) => {
  return (
    <ChakraLink as={NextLink}
      href={href}
      _focus={{textDecoration: "none", color: "#16222C"}}
      _hover={{ textDecoration: "none", color: "#16222C !important" }}
    >
      {children}
    </ChakraLink>
  );
};

export default CustomLinkItem;
