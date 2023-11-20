import {
  Box,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import UpComeingCard from "@/components/feature/upComeingCard";
import { ArrowLeft } from "lucide-react";

const ClassList = () => {
  const router = useRouter();
  return (
    <Box bg="#ffffff" rounded="2xl">
      <HStack p="6">
        <Box onClick={() => router.back()}>
          {" "}
          <ArrowLeft />
        </Box>
        <Text fontSize="18px" fontWeight="600">
          Class
        </Text>
      </HStack>
      <Tabs isFitted pt="4">
        <TabList mb="1em">
          <Tab
            _selected={{ color: "#000", borderBottom: "2px solid black" }}
            color="#8D96A5"
            fontSize="16px"
            fontWeight="600"
          >
            Upcoming
          </Tab>
          <Tab
            _selected={{ color: "#000", borderBottom: "2px solid black" }}
            color="#8D96A5"
            fontSize="16px"
            fontWeight="600"
          >
            Past Classes
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            gap={2}
            justifyContent="center"
          >
            {[...Array(10)].map((e, i) => (
              <UpComeingCard id={i} key={i} style={{ width: "48%" }} />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ClassList;
