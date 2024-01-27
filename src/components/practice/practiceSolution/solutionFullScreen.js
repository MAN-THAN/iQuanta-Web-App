import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Menu,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, Dot } from "lucide-react";
import React from "react";

const SolutionFullScreen = () => {
  return (
    <>
      <Flex px={{ base: "4", md: "16" }} pt="4" gap="5" flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}>
        <Box flexBasis={{ base: "100%", md: "100%", lg: "75%" }} bg="white.900" p="4" rounded="2xl">
          <Card h={{ base: "60vh", md: "60vh", lg: "80vh" }} shadow="none" border="none">
            <CardBody>
              <Text fontWeight="500">
                Questions : If f(5 + x) = f(5 - x) for every real x and f(x) = 0 has four distinct real roots, then the
                sum of the roots is
              </Text>
              <Text>Solution:</Text>
              <p className="py-10 ">
                {`f(5+x)=f(5-x) Substitute x = x - 5 => f(5 + x - 5) = f( 5 - ( x - 5)) => f(x) = f(10 - x) Let say m&n are
            two roots of f(x) Then f(m) = 0 = f(10 - m) f(n) = 0 = f(10 - n) f(10 - m) = 0 => 10 - m is a root f(10 - n)
            = 0 => 10 - n is a root Then 4 roots are m, n, 10 - m & 10 - n Sum of roots = m + 10 - m + n + 10 - n 20
            Final Answer: ​ 20"`}
              </p>
            </CardBody>
            <CardFooter>
              <Button
                size="md"
                width="100%"
                mt="6"
                bg="black.900"
                sx={{
                  color: "#fff",
                  fontSize: "12px",
                }}
                variant="solid"
              >
                Error Tracker
              </Button>
            </CardFooter>
          </Card>
        </Box>
        <Box flexBasis={{ base: "100%", md: "100%", lg: "35%" }} bg="white.900" rounded="2xl">
          <Card h={{ base: "30vh", md: "40vh", lg: "80vh" }} shadow="none" border="none">
            <CardBody>
              <Stack>
                <Box px="4" py="1">
                  <Menu>
                    <MenuButton
                      px={4}
                      py={2}
                      transition="all 0.2s"
                      borderRadius="md"
                      borderWidth="1px"
                      _hover={{}}
                      _expanded={{ borderColor: "black" }}
                    >
                      <HStack>
                        <span style={{ fontSize: "14px" }}>Top Comments</span> <ChevronDownIcon size="14px" />
                      </HStack>
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Latest</MenuItem>
                      <MenuItem>2 Month ago</MenuItem>
                      <MenuDivider />
                    </MenuList>
                  </Menu>
                </Box>
                <Box px="4" py="0">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box boxSize="40px">
                      <Image
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        className="rounded-md"
                        src="/profile.jpeg"
                        alt="Profile Image"
                      />
                    </Box>
                    <Box ml="2">
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#171717",
                          fontWeight: "600",
                          lineHeight: "13px",
                        }}
                      >
                        Hardik Beniwal
                      </p>
                      <HStack fontSize="12px" color="#636363">
                        <p>Master Level</p> <Dot color="#8D96A5" /> <span>28m</span>
                      </HStack>
                    </Box>
                  </Box>
                  <Text fontSize="16px" pl="9" lineHeight="20px" py="10px" textAlign="justify">
                    Yes, you can! But you need to be in 99.5%iler. I was also in such a situation earlier this year. If
                    I had known this, than I wouldn’t have grinded this if it weren’t for Banking exam. Moreover, If
                    anyone is interested, feel free to go through my courses. You’ll like it :)
                  </Text>
                  <HStack align="center" ml="9" fontWeight="500" fontSize="14px" py="2">
                    <Text>Like</Text>
                    <Dot color="#8D96A5" />
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#455564",
                        }}
                      >
                        12
                      </span>
                    </Box>
                    <Stack direction="row" h="12px">
                      <Divider border="0.2" orientation="vertical" />
                    </Stack>
                    <Text fontSize="14px" color="#455564">
                      Reply
                    </Text>
                    <Dot color="#8D96A5" />
                    <Box>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#455564",
                        }}
                      >
                        13
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#8D96A5",
                          paddingLeft: "5px",
                        }}
                      >
                        comments
                      </span>
                    </Box>
                  </HStack>
                </Box>
              </Stack>
            </CardBody>
            <CardFooter>
              <InputGroup width="100%" size="lg">
                {/* eslint-disable-next-line */}
                <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                  <Box boxSize="40px">
                    <Image
                      objectFit="cover"
                      width="100%"
                      height="100%"
                      className="rounded-md"
                      src="/profile.jpeg"
                      alt="Profile Image"
                    />
                  </Box>
                </InputLeftElement>
                <Input placeholder="" />
                <InputRightElement pr="1" color="#16222C" bg="" w="100px">
                  <Button variant="unstyled">
                    <Image src="/Vector.svg" />
                  </Button>
                  <Button variant="unstyled" fontSize="14px" lineHeight="12px" fontWeight="400">
                    Post
                  </Button>
                </InputRightElement>
              </InputGroup>
            </CardFooter>
          </Card>
        </Box>
      </Flex>
    </>
  );
};

export default SolutionFullScreen;
