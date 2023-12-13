import UserSettingLayout from "@/components/layouts/userSettingLayout";
import {
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
} from "@chakra-ui/react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Text,
} from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const CounsellingForm = () => {
  const router = useRouter();
  return (
    <UserSettingLayout>
    <Box>
      <Card>
        <CardHeader>
          <HStack>
            <Box onClick={() => router.back()}>
              <ArrowLeft />
            </Box>
            <Text fontSize="18px" fontWeight="600">
              Free Counselling
            </Text>
          </HStack>
        </CardHeader>
        <CardBody alignItems="center" justifyContent="center" px="6" pt="0">
          <FormControl display="flex" flexDirection="column" gap="6" mt="4">
            <Box>
              <FormLabel>Name*</FormLabel>
              <Input
                type="text"
                readOnly
                value="Rahul Jaiswal"
                placeholder="Name"
              />
            </Box>

            <Box>
              <FormLabel>Email ID*</FormLabel>
              <Input
                type="email"
                readOnly
                value="xyz@gmail.com"
                placeholder="Email"
              />
            </Box>
            <Box>
              <FormLabel>Mobile Number*</FormLabel>
              <InputGroup>
                <InputLeftAddon>+91</InputLeftAddon>
                <Input
                  type="tel"
                  readOnly
                  value="9999999999"
                  placeholder="Phone number"
                />
              </InputGroup>
            </Box>

            <Box>
              <FormLabel>Tell us the agenda in a few words</FormLabel>
              <Textarea
                placeholder="Here is a sample placeholder"
                readOnly
                value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex esse laborum error, possimus culpa tenetur aliquam neque corrupti excepturi ratione expedita illum amet saepe tempore voluptas. Corporis animi veniam accusamus!"
              />
            </Box>
            <Button
              onClick={() =>
                router.push("/usersettings/userhelp/counselling/confirmed")
              }
              width="100%"
              p="5"
              size="sm"
              variant="solid"
              sx={{
                margin: "0 auto",
                backgroundColor: "black !important",
                color: "white",
              }}
            >
              Confirmed
            </Button>
          </FormControl>
        </CardBody>
      </Card>
    </Box>
    </UserSettingLayout>
  );
};


export default CounsellingForm;
