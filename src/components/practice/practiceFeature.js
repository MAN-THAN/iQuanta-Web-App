import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const PracticeFeature = () => {
  const router = useRouter();
  const practiceFeatureCard = [
    {
      tittle: "Practice QAs",
      description: "Questions specially designed to help you solve complex problems easily.",
      icon: "/Filled.svg",
      color: "#5146D6",
      path: "/practice/qa",
    },
    {
      tittle: "Timed Quiz",
      description: "Solve questions with a real world time pressure of your enterence exam.",
      icon: "/Filled (1).svg",
      color: "#5146D6",
    },
    {
      tittle: "Past Papers",
      description: "A vast repository of past papers that will prepare you for your exams.",
      icon: "/Filled (2).svg",
      color: "#5146D6",
    },
    {
      tittle: "Accelareader",
      description: "Practise speed reading and save precious time during your exam.",
      icon: "/Hourglass.svg",
      color: "#5146D6",
    },
    
    
    {
      tittle: "Assignments",
      description: "Practise speed reading and save precious time during your exam.",
      icon: "/LockedWhite.svg",
      color: "#FFA53B",
    },
    {
      tittle: "Doubt Solving",
      description: "Practise speed reading and save precious time during your exam.",
      icon: "/Filled (4).svg",
      color: "#5146D6",
    },
  ];

  return (
    <Box bg="white.900" p="4" mt="4" roundedTop="2xl">
      <Box display="flex" flexWrap="wrap" justifyContent="space-around" gap="3">
        {practiceFeatureCard.map((data, i) => (
          <HStack
            key={i}
            width="350px"
            maxH="90px"
            bg="brand.800"
            alignItems="start"
            p="4"
            rounded="2xl"
            cursor="pointer"
            onClick={()=>router.push(data.path)}
          >
            <Box minW="40px" minH="40px" bg={data.color} rounded="lg" p="2">
              <Image alt="image" width="100%" objectFit="cover" src={data.icon} />
            </Box>
            <Stack ml="3">
              <Text fontSize="16px" fontWeight="500" lineHeight="15.6px">
                {data.tittle}
              </Text>
              <Text fontSize="14px" fontWeight="400" color="#455564" lineHeight="16px">
                {data.description}
              </Text>
            </Stack>
          </HStack>
        ))}
      </Box>
    </Box>
  );
};

export default PracticeFeature;
