import { Box, Flex, HStack, Image, Stack, Text, useRadioGroup } from "@chakra-ui/react";
import TextRadio from "../../components/common/textRadio";
import { Dot, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { randomColors } from "@/utilities/commonFunctions";

const PracticeAllTopic = () => {
  const options = ["All", "GMT", "GRE", "GMAT"];
  const router = useRouter();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "All",
    onChange: console.log,
  });
  const group = getRootProps();

  const allTopics = [
    {
      tittle: "Quantitative Aptitude",
      img: "/CirclesThree.png",
      module: "2 Modules",
      exam: "GMAT",
      status: "Important",
    },
    {
      tittle: "English Language",
      img: "/Translate.png",
      module: "2 Modules",
      exam: "GMAT",
      status: "Important",
    },
    {
      tittle: "  Reasoning",
      img: "/PuzzlePiece.png",
      module: "2 Modules",
      exam: "GMAT",
      status: "Important",
    },
    {
      tittle: " Data Interpretation",
      img: "/PresentationChart.png",
      module: "2 Modules",
      exam: "GMAT",
      status: "Important",
    },
  ];

  return (
    <Box px="4">
      <Text fontSize="18px" fontWeight="500" py="4">
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
        {allTopics.map((data, i) => (
          <HStack
            key={i}
            align="center"
            bg="#F1F2F6"
            p="3"
            mt="4"
            rounded="2xl"
            cursor="pointer"
            onClick={() => router.push(`/practice/qa/${i}`)}
          >
            <Box
              width="50px"
              height="50px"
              bg={randomColors(["#5146D6", "#51D3E5", "#E56C51", "#E551B3"])}
              p="2"
              rounded="xl"
            >
              <Image alt="image" width="100%" objectFit="cover" src={data.img} />
            </Box>
            <Stack pl="3">
              <Text fontSize="16px" fontWeight="500" p="0">
                {data.tittle}
              </Text>
              <Flex align="center" fontSize="14px" fontWeight="400" color="#455564">
                <Text>{data.module}</Text>
                <Dot />
                <Text>{data.exam}</Text> <Dot />
                <Text color="#5146D6" fontWeight="600">
                  {data.status}
                </Text>
              </Flex>
            </Stack>
          </HStack>
        ))}
      </Stack>
    </Box>
  );
};

export default PracticeAllTopic;
