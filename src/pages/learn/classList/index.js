import { Box, Grid, GridItem, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import UpComeingCard from "@/components/feature/upComeingCard";
import { ArrowLeft } from "lucide-react";
import RootLayout from "@/components/layouts/layout";

const ClassList = () => {
  const router = useRouter();
  return (
    <Box bg="#ffffff" rounded="2xl">
      <HStack p="4">
        <Box cursor="pointer" onClick={() => router.back()}>
          <ArrowLeft />
        </Box>
        <Text fontSize="18px" fontWeight="600">
          Class
        </Text>
      </HStack>
      <Tabs isFitted>
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
          <TabPanel >
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap={2}
              
            >
              {[...Array(6)].map((e, i) => (
                <GridItem key={i}>
                  <UpComeingCard id={i} />
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

ClassList.getLayout = (page) => <RootLayout>{page}</RootLayout>;

export default ClassList;
