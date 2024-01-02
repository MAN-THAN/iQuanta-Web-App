import {
  Card,
  CardBody,
  Heading,
  Text,
  HStack,
  Flex,
  Image,
  Stack,
  Box,
} from "@chakra-ui/react";
import { Dot } from "lucide-react";
import { randomColors } from "../../utilities/commonFunctions";
import { useRouter } from "next/navigation";

const MockTests = ({ data, onButtonClick }) => {
  const router = useRouter();

  return (
    <>
      {[...Array(4)].map((e, i) => (
        <Card key={i} bg={randomColors(["#336792", "#E56C51", "#339287", "#643392"])} rounded="xl" mt="6">
          <CardBody>
            <Box h="130px" w="100%" objectFit="cover" overflow="hidden" rounded="2xl">
              <Image
                width="100%"
                src="/Rectangle 3202.png"
                alt="Green doule couch with wooden legs"
                borderRadius="lg"
              />
            </Box>
            <Stack mt="6" spacing="3" color="#fff">
              <Heading fontSize="18px" fontWeight="600" py="4">
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
                  <span style={{ fontSize: "14px" }}> Video solution, performance analysis and more</span>
                </li>
              </ul>
            </Stack>
          </CardBody>
          <Flex align="center" justify="space-between" bg="#000" rounded="2xl" m="2" padding="4">
            <HStack align="self-start">
              <Text fontSize="16px" color="#fff">
                ₹2,700
              </Text>
              <strike className="text-gray-500">₹3000</strike>
              <span className="text-green-500">10% Off</span>
            </HStack>
            <HStack>
              <Text fontSize="16px" color="#fff" fontWeight="500">
                2 Months
              </Text>
              <HStack fontSize="10px" textAlign="start">
                <p className="text-gray-400 text-sm">Starts immediately</p>
              </HStack>
            </HStack>
          </Flex>
        </Card>
      ))}
    </>
  );
};

export default MockTests;
