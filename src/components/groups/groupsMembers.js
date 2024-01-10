import { Modal, Space } from "antd";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  ListItem,
  ModalHeader,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
} from "@chakra-ui/react";
import { ArrowLeft, Dot, SearchIcon, X } from "lucide-react";

const GroupsMembers = ({ isOpen, onClose }) => {
  const tabs = [
    {
      tabName: "Group Admins",
    },
    {
      tabName: "Study Partners",
    },
    {
      tabName: "Friends",
    },
    {
      tabName: "All",
    },
  ];
  return (
    <>
      <Modal
        width="420px"
        title={
          <Flex justifyContent="space-between">
            <span style={{ fontSize: "18px", fontWeight: "600" }}>Group Members</span>
            <span style={{ cursor: "pointer" }} onClick={() => onClose(false)}>
              <X />
            </span>
          </Flex>
        }
        centered
        open={isOpen}
        onOk={() => onClose(false)}
        onCancel={() => onClose(false)}
        closable={false}
        footer={null}
      >
        <Tabs colorScheme="black.900" px='0'>
          <TabList>
            {tabs.map((tab, i) => (
              <Tab key={i} fontSize="12px" fontWeight="600">
                {tab.tabName}
              </Tab>
            ))}
          </TabList>

          <div
            style={{
              overflow: "scroll",
              height: "600px",
            }}
          >
            <TabPanels>
              <TabPanel px="0">
                <UnorderedList spacing="3" listStyleType="none">
                  {[...Array(10)].map((data, index) => (
                    <ListItem key={index} py="2">
                      <HStack align="center" justify="space-between">
                        <Box display="flex" alignItems="center">
                          <Box boxSize="48px" rounded="md">
                            <Image
                              rounded="md"
                              objectFit="cover"
                              width="100%"
                              height="100%"
                              src="/static/images/Profile.jpeg"
                              alt="Profile Image"
                            />
                          </Box>
                          <Box pl="4">
                            <p style={{ fontSize: "16px", color: "#171717" }}>Gourav</p>
                            <p style={{ fontSize: "14px", color: "#636363", display: "flex" }}>
                              CAT <Dot /> GRE
                            </p>
                          </Box>
                        </Box>
                      </HStack>
                    </ListItem>
                  ))}
                </UnorderedList>
              </TabPanel>
              <TabPanel px="0">
                <UnorderedList spacing="3" listStyleType="none">
                  {[...Array(5)].map((data, index) => (
                    <ListItem key={index} py="2">
                      <HStack align="center" justify="space-between">
                        <Box display="flex" alignItems="center">
                          <Box boxSize="48px" rounded="md">
                            <Image
                              rounded="md"
                              objectFit="cover"
                              width="100%"
                              height="100%"
                              src="/static/images/Profile.jpeg"
                              alt="Profile Image"
                            />
                          </Box>
                          <Box pl="4">
                            <p style={{ fontSize: "16px", color: "#171717" }}>Gourav</p>
                            <p style={{ fontSize: "14px", color: "#636363", display: "flex" }}>
                              CAT <Dot /> GRE
                            </p>
                          </Box>
                        </Box>
                      </HStack>
                    </ListItem>
                  ))}
                </UnorderedList>
              </TabPanel>
              <TabPanel px="0">
                <UnorderedList spacing="3" listStyleType="none">
                  {[...Array(10)].map((data, index) => (
                    <ListItem key={index} py="2">
                      <HStack align="center" justify="space-between">
                        <Box display="flex" alignItems="center">
                          <Box boxSize="48px" rounded="md">
                            <Image
                              rounded="md"
                              objectFit="cover"
                              width="100%"
                              height="100%"
                              src="/static/images/Profile.jpeg"
                              alt="Profile Image"
                            />
                          </Box>
                          <Box pl="4">
                            <p style={{ fontSize: "16px", color: "#171717" }}>Gourav</p>
                            <p style={{ fontSize: "14px", color: "#636363", display: "flex" }}>
                              CAT <Dot /> GRE
                            </p>
                          </Box>
                        </Box>
                      </HStack>
                    </ListItem>
                  ))}
                </UnorderedList>
              </TabPanel>
              <TabPanel px="0">
                <UnorderedList listStyleType="none">
                  {[...Array(2)].map((data, index) => (
                    <ListItem key={index} py="2" px="0">
                      <HStack align="center" justify="space-between">
                        <Box display="flex" alignItems="center">
                          <Box boxSize="48px" rounded="md">
                            <Image
                              rounded="md"
                              objectFit="cover"
                              width="100%"
                              height="100%"
                              src="/static/images/Profile.jpeg"
                              alt="Profile Image"
                            />
                          </Box>
                          <Box pl="4">
                            <p style={{ fontSize: "16px", color: "#171717" }}>Gourav</p>
                            <p style={{ fontSize: "14px", color: "#636363", display: "flex" }}>
                              CAT <Dot /> GRE
                            </p>
                          </Box>
                        </Box>
                      </HStack>
                    </ListItem>
                  ))}
                </UnorderedList>
              </TabPanel>
            </TabPanels>
          </div>
        </Tabs>
      </Modal>
    </>
  );
};

export default GroupsMembers;
