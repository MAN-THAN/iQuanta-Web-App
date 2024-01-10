import {  Card, CardBody, CardHeader, HStack, Text } from "@chakra-ui/react";
import { randomColors } from "@/utilities/commonFunctions";
import { ChevronRight, Dot } from "lucide-react";

const ExamCard = ({ data, key }) => {
  return (
    <Card key={key} width="250px" rounded="2xl" bg={randomColors(["#336792", "#E56C51", "#339287", "#643392"])} color="#fff">
      <CardHeader bg="#FFFFFF1A" maxH="50px" alignItems="center" padding="4">
        <HStack justifyContent='space-between' alignItems='center'>
        <Text fontSize="16px" fontWeight="500">
          {data.name}
        </Text>
        <ChevronRight/>
        </HStack>
      </CardHeader>
      <CardBody>
        <HStack gap='0'>
          <Dot transform="scale(2)" />
          <Text>{data.point}</Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ExamCard;
{
  /* <Box
      width="250px"
      key={key}
      rounded="2xl"
      bg={randomColors(["#336792", "#E56C51", "#339287", "#643392"])}
      p="4"
      color="#fff"
    >
      <Text fontSize="18px" fontWeight="500" pt="3">
        {data.name}
      </Text>
    </Box> */
}
