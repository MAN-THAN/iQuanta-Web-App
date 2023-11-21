import { Box, Stack, Heading, HStack, Flex } from "@chakra-ui/react";
import FeatureCardSide from "../feature/featureCardSide";
import { usePathname } from "next/navigation";
import UpComeingCard from "../feature/upComeingCard";

const LearnRightSidebar = () => {
  const path = usePathname();

  return (
    <>
      <Stack>
        <UpComeingCard />
        <FeatureCardSide />
      </Stack>
    </>
  );
};

export default LearnRightSidebar;
