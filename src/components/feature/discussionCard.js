import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import {  ImagePlus } from "lucide-react";
import React from "react";
import { Timeline } from "antd";

const DiscussionCard = () => {
  return (
    <Box width="300px">
      <Card maxW="xs" bg="#fff" rounded="xl">
        <CardHeader>
          <Text textAlign="center" color="black.400" fontSize="12px">
            Discussion(3)
          </Text>
          <InputGroup mt="4">
            <InputLeftElement>
              <Box boxSize="30px">
                <Image
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  className="rounded-md"
                  src="/static/images/Profile.jpeg"
                  alt="Profile Image"
                />
              </Box>
            </InputLeftElement>
            <Input w="full" placeholder="Start discussion" />
            <InputRightElement pr="10">
              <Flex gap="2" bg="#fff">
                <Box>
                  <ImagePlus />
                </Box>
                <Text>Post</Text>
              </Flex>
            </InputRightElement>
          </InputGroup>
        </CardHeader>
        <CardBody>
          <Timeline
            items={[
              {
                children: (
                  <Stack>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        // width: ['auto', null, '280px'],
                      }}
                    >
                      <Box boxSize="40px">
                        <Image
                          objectFit="cover"
                          width="100%"
                          height="100%"
                          className="rounded-md"
                          src="/static/images/Profile.jpeg"
                          alt="Profile Image"
                        />
                      </Box>
                      <Box ml="2">
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#171717",
                            fontWeight: "600",
                          }}
                        >
                          Hardik Beniwal
                        </p>
                        <p style={{ fontSize: "12px", color: "#636363" }}>
                          Master Level
                        </p>
                      </Box>
                    </Box>
                    <Text
                      paddingLeft="3rem"
                      textAlign="justify"
                      fontSize="14px"
                    >
                      Yes, you can! But you need to be in 99.5%iler. I was also
                      in such a situation earlier this year. If I had known
                      this, than I wouldn’t have grinded this if it weren’t for
                      Banking exam. Moreover, If anyone is interested, feel free
                      to go through my courses. You’ll like it :)
                    </Text>
                    <HStack align="center" paddingLeft="3rem">
                      <Text fontSize="12px" color="#455564">
                        Like
                      </Text>

                      <Stack direction="row" h="12px">
                        <Divider border="0.2" orientation="vertical" />
                      </Stack>
                      <Text fontSize="12px" color="#455564">
                        Reply
                      </Text>
                    </HStack>
                  </Stack>
                ),
              },
              {
                children: (
                  <Stack paddingLeft="3rem" pt="3">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        // width: ['auto', null, '280px'],
                      }}
                    >
                      <Box boxSize="40px">
                        <Image
                          objectFit="cover"
                          width="100%"
                          height="100%"
                          className="rounded-md"
                          src="/static/images/Profile.jpeg"
                          alt="Profile Image"
                        />
                      </Box>
                      <Box ml="2">
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#171717",
                            fontWeight: "600",
                          }}
                        >
                          Hardik Beniwal
                        </p>
                        <p style={{ fontSize: "12px", color: "#636363" }}>
                          Master Level
                        </p>
                      </Box>
                    </Box>
                    <Text
                      paddingLeft="3rem"
                      textAlign="justify"
                      fontSize="14px"
                    >
                      Yes, you can! But you need to be in 99.5%iler.
                    </Text>
                    <HStack align="center" paddingLeft="3rem">
                      <Text fontSize="12px" color="#455564">
                        Like
                      </Text>
                      <Stack direction="row" h="12px">
                        <Divider border="0.2" orientation="vertical" />
                      </Stack>
                      <Text fontSize="12px" color="#455564">
                        Reply
                      </Text>
                    </HStack>
                  </Stack>
                ),
              },
            ]}
          />
        </CardBody>
      </Card>
    </Box>
  );
};

export default DiscussionCard;
