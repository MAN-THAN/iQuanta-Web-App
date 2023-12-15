import UserSettingLayout from "@/components/layouts/userSettingLayout";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { ArrowLeft, ChevronRight, Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";

const UserSettings = () => {
  const router = useRouter();
  return (
    <UserSettingLayout>
      <Box>
        <Card>
          <CardHeader>
            <HStack px="4" pt="3" alignItems="center" justifyContent="space-between">
              <Text fontSize="18px" fontWeight="600">
                Account Activity
              </Text>
              <Plus />
            </HStack>
          </CardHeader>
          <CardBody>
            <Text px="4" pb="6" fontSize="14px" color="#455564" fontWeight="600">
              Linked Accounts
            </Text>
            <UnorderedList cursor="pointer" listStyleType="none" fontSize="14px" fontWeight="500" color="#455564">
              <ListItem key="1" onClick={()=>router.push("/usersettings/myAccountAndLearning")}>
                <Flex align="center" justify="space-between">
                  <Box display="flex" alignItems="center">
                    <Avatar size="lg" alt="user img" src="/man1.jpg" />
                    <Box ml="4">
                      <Text fontSize="16px" fontWeight="500">
                        Gmail
                      </Text>
                      <Text fontSize="14px" fontWeight="400">
                        xyz@gmail.com
                      </Text>
                    </Box>
                  </Box>
                  <X />
                </Flex>
              </ListItem>
            </UnorderedList>
            <Text px="4" py="6" fontSize="18px" fontWeight="600">
              My Learning
            </Text>
            <UnorderedList
              cursor="pointer"
              listStyleType="none"
              fontSize="14px"
              fontWeight="500"
              spacing="5"
              color="#455564"
            >
              {[...Array(2)].map(() => (
                <>
                  <ListItem key="1">
                    <Flex align="center" justify="space-between">
                      <Box display="flex" alignItems="center">
                        <Box boxSize="30px" textAlign="center" bg="red.300" rounded="lg" p="1">
                          G
                        </Box>
                        <Box ml="4">
                          <Text>Gmail</Text>
                        </Box>
                      </Box>
                      <ChevronRight />
                    </Flex>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <ButtonGroup width="full" spacing="2">
              <Button
                onClick={() => router.push("/usersettings/deactivate")}
                border="1px solid"
                width="300px"
                size="md"
                variant="solid"
                sx={{
                  margin: "0 auto",
                  backgroundColor: "#ffff !important",
                }}
              >
                Deactivate Account
              </Button>
              <Button
                width="300px"
                size="md"
                variant="solid"
                sx={{
                  margin: "0 auto",
                  backgroundColor: "black !important",
                  color: "white",
                }}
              >
                Log out
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </UserSettingLayout>
  );
};

export default UserSettings;
