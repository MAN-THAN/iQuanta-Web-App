import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  useRadioGroup,
} from "@chakra-ui/react";
import TextRadio from "../../components/common/textRadio";
import { Dot, Search } from "lucide-react";
import { useRouter } from "next/navigation";

const AllTopics = () => {
  const options = ["All", "GMT", "GRE", "GMAT"];
  const router = useRouter();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "All",
    onChange: console.log,
  });
  const group = getRootProps();
  return (
    <Box>
      <Text fontSize="18px" fontWeight="500" p="4">
        All Topic
      </Text>
      <Flex align="center" justify="space-between">
        <HStack {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <TextRadio key={value} {...radio}>
                {value}
              </TextRadio>
            );
          })}
        </HStack>
        <Search />
      </Flex>
      <Stack>
        <HStack align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
          <Box width="50px" height="50px" bg="#5146D6" p="2" rounded="xl">
            <Image
              alt="image"
              width="100%"
              objectFit="cover"
              src="/CirclesThree.png"
            />
          </Box>
          <Stack pl="3">
            <Text fontSize="16px" fontWeight="500" p="0">
              Quantitative Aptitude
            </Text>
            <Flex
              align="center"
              fontSize="14px"
              fontWeight="400"
              color="#455564"
            >
              <Text>2 Modules</Text>
              <Dot />
              <Text>GMAT</Text> <Dot />
              <Text color="#5146D6" fontWeight="600">
                Important
              </Text>{" "}
            </Flex>
          </Stack>
        </HStack>
        <HStack
          align="center"
          bg="#F1F2F6"
          p="3"
          mt="4"
          rounded="2xl"
          cursor='pointer'
          onClick={() => {
            router.push("/learn/exams/subTopics");
          }}
        >
          <Box width="50px" height="50px" bg="#51D3E5" p="2" rounded="xl">
            <Image
              alt="image"
              width="100%"
              objectFit="cover"
              src="/Translate.png"
            />
          </Box>
          <Stack pl="3">
            <Text fontSize="16px" fontWeight="500" p="0">
              English Language
            </Text>
            <Flex
              align="center"
              fontSize="14px"
              fontWeight="400"
              color="#455564"
            >
              <Text>2 Modules</Text>
              <Dot />
              <Text>GMAT</Text> <Dot />
              <Text color="#5146D6" fontWeight="600">
                Important
              </Text>{" "}
            </Flex>
          </Stack>
        </HStack>
        <HStack align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
          <Box width="50px" height="50px" bg="#E56C51" p="2" rounded="xl">
            <Image
              alt="image"
              width="100%"
              objectFit="cover"
              src="/PuzzlePiece.png"
            />
          </Box>
          <Stack pl="3">
            <Text fontSize="16px" fontWeight="500" p="0">
              Reasoning
            </Text>
            <Flex
              align="center"
              fontSize="14px"
              fontWeight="400"
              color="#455564"
            >
              <Text>2 Modules</Text>
              <Dot />
              <Text>GMAT</Text> <Dot />
              <Text color="#5146D6" fontWeight="600">
                Important
              </Text>{" "}
            </Flex>
          </Stack>
        </HStack>
        <HStack align="center" bg="#F1F2F6" p="3" mt="4" rounded="2xl">
          <Box width="50px" height="50px" bg="#E551B3" p="2" rounded="xl">
            <Image
              alt="image"
              width="100%"
              objectFit="cover"
              src="/PresentationChart.png"
            />
          </Box>
          <Stack pl="3">
            <Text fontSize="16px" fontWeight="500" p="0">
              Data Interpretation
            </Text>
            <Flex
              align="center"
              fontSize="14px"
              fontWeight="400"
              color="#455564"
            >
              <Text>2 Modules</Text>
              <Dot />
              <Text>GMAT</Text> <Dot />
              <Text color="#5146D6" fontWeight="600">
                Important
              </Text>{" "}
            </Flex>
          </Stack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default AllTopics;
