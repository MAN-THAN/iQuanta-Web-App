import { usePathname } from "next/navigation";
import FeatureCardSide from "../feature/featureCardSide";
import UpComeingFeedClass from "../feature/upComeingFeedClass";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { CalendarDays, ChevronRight } from "lucide-react";

const PracticeRightSidebar = () => {
  const path = usePathname();

  return (
    <>
      <Stack maxW="250px">
        <Flex alignItems="center" justifyContent="space-between" pb="3">
          <Box display="flex" gap="2">
            <CalendarDays />
            <Heading fontSize="18px" fontWeight="500">
              Solution
            </Heading>
          </Box>
        </Flex>
        <Box bg="white.900" p="4">
          <p>
            {`f(5+x)=f(5-x) Substitute x = x - 5 => f(5 + x - 5) = f( 5 - ( x - 5)) => f(x) = f(10 - x) Let say m&n are
            two roots of f(x) Then f(m) = 0 = f(10 - m) f(n) = 0 = f(10 - n) f(10 - m) = 0 => 10 - m is a root f(10 - n)
            = 0 => 10 - n is a root Then 4 roots are m, n, 10 - m & 10 - n Sum of roots = m + 10 - m + n + 10 - n 20
            Final Answer: ​ 20"`}
          </p>
          <Button
            size="md"
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
        </Box>
        <Box>

        </Box>
      </Stack>
    </>
  );
};

export default PracticeRightSidebar;
