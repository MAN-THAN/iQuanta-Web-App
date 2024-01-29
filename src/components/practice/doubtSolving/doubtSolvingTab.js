import BackButton from "@/components/common/backButton";
import {
  Box,
  Divider,
  HStack,
  Image,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const DoubtSolvingTab = () => {
  const router = useRouter();
  return (
    <>
      <Box bg="#fff" rounded="2xl" py="4" h="80vh">
        <HStack px="4">
          <BackButton />
          <Text fontWeight="500">Doubt Solving</Text>
        </HStack>
        <Tabs isFitted>
          <TabList>
            <Tab
              _selected={{ color: "#000", borderBottom: "2px solid black" }}
              color="#8D96A5"
              fontSize={{ base: "16px", md: "20px" }}
              fontWeight="600"
            >
              <HStack py={{ base: "3", md: "4" }}>
                <Text fontSize={{ base: "12px", md: "16px" }}>Premium Group</Text>
              </HStack>
            </Tab>
            <Tab
              roundedTopRight="2xl"
              bg="#fff"
              _selected={{ color: "#000", borderBottom: "2px solid black" }}
              color="#8D96A5"
              fontSize={{ base: "16px", md: "20px" }}
              fontWeight="600"
            >
              <HStack py={{ base: "0", md: "4" }}>
                <Text fontSize={{ base: "12px", md: "16px" }}>Public Group</Text>
              </HStack>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding="0">
              <UnorderedList listStyleType="none" py="4" px="4">
                {[...Array(4)].map(() => (
                  <>
                    <ListItem
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      py="4"
                      cursor="pointer"
                      onClick={() => router.push("/groups/657fff13a30ce12a5e68f3b0")}
                    >
                      <HStack alignItems="center" gap="6">
                        <Image boxSize="60px" fit="cover" src="/exam.png" />
                        <Text fontWeight="500">CAT Full Course 2021</Text>
                      </HStack>
                      <ChevronRight />
                    </ListItem>
                    <Divider />
                  </>
                ))}
              </UnorderedList>
            </TabPanel>
            <TabPanel padding="0"></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default DoubtSolvingTab;
