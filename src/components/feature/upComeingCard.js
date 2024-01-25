import { Card, Box, Stack, Heading, Text, Button, HStack, Flex } from "@chakra-ui/react";
import { CalendarDays, ChevronRight, Dot, Scale } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const UpComeingCard = ({ style, id, width }) => {
  const router = useRouter();
  const path = usePathname();
  return (
    <Box mb="4">
      <Card
        // maxW="sm"
        minW="xs"
        bg="#5146D6"
        h="auto"
        rounded="xl"
        bgImage="url('/profile.jpeg')"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgfilter="grayscale(100%)"
        bgPosition="center"
        position="relative"
      >
        <Box h="150px" zIndex="999">
          <Flex p="3" align="center" gap="2">
            <Box w="0.8rem" h="0.8rem" bg="green.500" rounded="full" />
            <Text padding="0" color="#fff" fontSize="16px" fontWeight="500">
              Aniket Kumar
            </Text>
          </Flex>
        </Box>
        <Flex zIndex="9" align="center" justify="space-between" bg="#000000B8" rounded="lg" m="2" padding="2">
          <Stack align="self-start">
            <Text fontSize="16px" color="#fff">
              Logical Reasoning
            </Text>
            <HStack fontSize="10px" textAlign="start">
              <span className="text-green-500">Starts in 04mins</span>
            </HStack>
          </Stack>
          <Box bg="#9696965C" padding="0" rounded="md">
            {path == "/learn" ? (
              <Button
                onClick={() => router.push("/learn/classList")}
                variant="solid"
                color="#fff"
                backgroundColor="#9696965C"
                _hover={{ color: "#000", backgroundColor: "#fff" }}
              >
                View
              </Button>
            ) : (
              <Button
                onClick={() => router.push(`/learn/class/${id}`)}
                variant="solid"
                color="#fff"
                backgroundColor="#9696965C"
                _hover={{ color: "#000", backgroundColor: "#fff" }}
              >
                View
              </Button>
            )}
          </Box>
        </Flex>
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0%",
            background: "rgba(0,0,0,0.3)",
            zIndex: "1",
            mixBlendMode: "multiply",
            borderRadius: "8px",
          }}
        ></div>
      </Card>
    </Box>
  );
};

export default UpComeingCard;
