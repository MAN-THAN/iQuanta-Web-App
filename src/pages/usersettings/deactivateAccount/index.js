import UserSettingLayout from "@/components/layouts/userSettingLayout";
import LogoutAndDeactivateButtons from "@/components/logoutSection/logoutAndDeactivateButtons";
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
  FormErrorMessage,
  FormLabel,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { ArrowLeft, ChevronRight, Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";

const DetailseactivateAccount = () => {
  const router = useRouter();
  return (
    <UserSettingLayout>
      <Box>
        <Card>
          <CardHeader>
            <HStack px="4" pt="3">
              <ArrowLeft />
              <Text fontSize="18px" fontWeight="600">
                Deactivate Account
              </Text>
            </HStack>
          </CardHeader>
          <CardBody>
            <Text px="4" pb="6" fontSize="16px" color="#455564">
              By continuing, you will deactivate your account. All your purchases of course and learning material will
              be removed from your account.
            </Text>
            <Text px="4" pb="6" fontSize="16px" color="#455564">
              If you change your mind later, all you need to do to re-activate your account is to simply log in with
              your current email id/mobile number.
            </Text>
            <Box p="4">
              <FormLabel fontSize="14px" fontWeight="500">
                Enter your registered mobile number{" "}
              </FormLabel>
              <InputGroup>
                <InputLeftAddon>
                    +91
                </InputLeftAddon>
                <Input type="tel" value="" placeholder="Phone number" />
              </InputGroup>
            </Box>
          </CardBody>
          <CardFooter>
            <LogoutAndDeactivateButtons />
          </CardFooter>
        </Card>
      </Box>
    </UserSettingLayout>
  );
};

export default DetailseactivateAccount;
