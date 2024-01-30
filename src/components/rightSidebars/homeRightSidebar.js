import { usePathname } from "next/navigation";
import FeatureCardSide from "../feature/featureCardSide";
import UpComeingFeedClass from "../feature/upComeingFeedClass";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { CalendarDays, ChevronRight } from "lucide-react";

const HomeRightSidebar = () => {
  const path = usePathname();

  return (
    <>
      <Stack position={'sticky'} top={'12vh'}>
        <Flex alignItems="center" justifyContent="space-between" pb="3">
          <Box display="flex" gap="2">
            <CalendarDays />
            <Heading fontSize="18px" fontWeight="500">
              Calender
            </Heading>
          </Box>
          <ChevronRight />
        </Flex>
        <UpComeingFeedClass />
        <UpComeingFeedClass />
      </Stack>
    </>
  );
};

export default HomeRightSidebar;
