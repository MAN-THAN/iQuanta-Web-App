import { Card, CardBody, Heading, Text, HStack, Flex, Image, Stack, Box } from "@chakra-ui/react";
import { Dot } from "lucide-react";
import { randomColors } from "../../utilities/commonFunctions";
import { useRouter } from "next/navigation";

const MockTestAvailable = () => {
  const router = useRouter();

  return (
    <Box bg="white.900" p="4" mt="1">
      {[...Array(4)].map((e, i) => (
        <Card key={i} bg={randomColors(["#336792", "#E56C51", "#339287", "#643392"])} rounded="xl" mt="4">
          <CardBody>
            <Box maxH={{ base: "130px", md: "200px" }} w="100%" objectFit="cover" overflow="hidden" rounded="2xl">
              <Image
                width="100%"
                src="/Rectangle 3202.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </Box>
            <Stack mt={{ base: "4", md: "6" }} spacing="3" color="#fff">
              <Heading fontSize={{ base: "16px", md: "18px" }} fontWeight="600" py={{ base: "2", md: "4" }}>
                CAT 2021 Mock Test Series 101
              </Heading>
              <ul className="text-base">
                <li className="flex">
                  <span>
                    <Dot transform="scale(2)" />
                  </span>
                  <span style={{ fontSize: "14px" }}>15 CAT pattern full mocks</span>
                </li>
                <li className="flex">
                  <span>
                    <Dot transform="scale(2)" />
                  </span>
                  <span style={{ fontSize: "14px" }}>Video solution, performance analysis, and more</span>
                </li>
              </ul>
            </Stack>
          </CardBody>
          <Flex
            align="center"
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            bg="#000"
            rounded="2xl"
            m="2"
            padding="4"
            cursor='pointer'
            onClick={() => router.push("/courses/0")}
          >
            <HStack align="self-start" mb={{ base: "2", md: "0" }}>
              <Text fontSize={{ base: "14px", md: "16px" }} color="#fff">
                ₹2,700
              </Text>
              <strike className="text-gray-500" ml="2">
                ₹3000
              </strike>
              <span className="text-green-500" ml="2">
                10% Off
              </span>
            </HStack>
            <HStack fontSize={{ base: "12px", md: "16px" }} textAlign={{ base: "center", md: "start" }}>
              <Text color="#fff" fontWeight="500">
                2 Months
              </Text>
              <HStack fontSize="10px" textAlign="start" ml="2">
                <p className="text-gray-400 text-sm">Starts immediately</p>
              </HStack>
            </HStack>
          </Flex>
        </Card>
      ))}
    </Box>
  );
};

export default MockTestAvailable;
