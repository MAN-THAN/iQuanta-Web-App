import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const CustomLinkItem = ({ href, children }) => {
  const { asPath } = useRouter();

  const isActive = asPath === href;

  return (
    <ChakraLink
      as={NextLink}
      href={href}
      _focus={{ textDecoration: "none", color: "#16222C" }}
      _hover={{ textDecoration: "none", color: "#16222C !important" }}
      color={isActive ? "#16222C" : "inherit"}
    >
      {children}
    </ChakraLink>
  );
};

export default CustomLinkItem;
