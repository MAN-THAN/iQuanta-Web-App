import UserSettingLayout from "@/components/layouts/userSettingLayout";
import {
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
} from "@chakra-ui/react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const UserSettings = () => {
  const router = useRouter();
  return (
    <UserSettingLayout>
      <Box>
        <Card>
          <CardHeader>
            <HStack>
              <ArrowLeft />
              <Text fontSize="18px" fontWeight="600">
                Account Activity
              </Text>
            </HStack>
          </CardHeader>
          <CardBody>
            <UnorderedList listStyleType="none" fontSize="14px" fontWeight="500" color="#455564">
              <ListItem key="1">
                <Flex align="center" justify="space-between">
                  <Text>Posts you’ve liked</Text>
                  <Box>
                    <ChevronRight />
                  </Box>
                </Flex>
                <Divider p="4" />
              </ListItem>
              <ListItem>
                <Flex align="center" justify="space-between">
                  <Text>Posts you marked helpful</Text>
                  <Box>
                    <ChevronRight />
                  </Box>
                </Flex>
                <Divider p="4" />
              </ListItem>
              <ListItem>
                <Flex align="center" justify="space-between">
                  <Text>Challenges you’ve participated in</Text>
                  <Box>
                    <ChevronRight />
                  </Box>
                </Flex>
                <Divider p="4" />
              </ListItem>
              <ListItem>
                <Flex align="center" justify="space-between">
                  <Text>Time Spent</Text>
                  <Box>
                    <ChevronRight />
                  </Box>
                </Flex>
                <Divider p="4" />
              </ListItem>
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
