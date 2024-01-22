import { usePathname } from "next/navigation";
import FeatureCardSide from "../feature/featureCardSide";
import UpComeingFeedClass from "../feature/upComeingFeedClass";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { CalendarDays, ChevronRight } from "lucide-react";
import SolutionCard from "../practice/practiceSolution/solutionCard";

const PracticeRightSidebar = () => {
  const path = usePathname();

  return (
    <>
     <SolutionCard/>
    </>
  );
};

export default PracticeRightSidebar;
