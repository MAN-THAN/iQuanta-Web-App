import {
  Box,
  Button,
  Center,
  CloseButton,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  ListItem,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import RootLayout from "@/components/layouts/layout";
import FeedsLayout from "@/components/layouts/feedsLayout";

const PaymentPage = () => {
  const router = useRouter();
  return (
    <FeedsLayout>
      <Box bg="#fff" rounded="2xl">
        <HStack p="6">
          <Box onClick={() => router.back()}>
            {" "}
            <ArrowLeft />
          </Box>
          <Text fontSize="18px" fontWeight="600">
            Checkout
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
              Personal Information
            </Tab>
            <Tab
              _selected={{ color: "#000", borderBottom: "2px solid black" }}
              color="#8D96A5"
              fontSize="16px"
              fontWeight="600"
            >
              Payment Details
            </Tab>
          </TabList>
          <Box p="6">
            <Text fontWeight="600">Review Purchase</Text>
            <HStack bg="#F1F2F6" p="3" mt="3" rounded="lg">
              <Center
                bg="#5146D6"
                color="#fff"
                width="60px"
                height="60px"
                rounded="2xl"
                fontSize="30px"
                fontWeight="500"
              >
                C
              </Center>
              <Stack pl="3">
                <Text fontSize="16px" fontWeight="500">
                  CAT Full Course
                </Text>
                <Text fontSize="12px">Start date: 05 May 2021</Text>
              </Stack>
              <div className="ms-auto bg-white rounded-full">
                <CloseButton />
              </div>
            </HStack>
          </Box>
          <Box bg="#F1F2F3" h="10px"></Box>
          <TabPanels>
            <TabPanel>
              <Box>
                <FormControl display="flex" gap="1" flexWrap="wrap" mt="4">
                  <FormLabel>Full Name</FormLabel>
                  <Input p="6" type="text" readOnly value="Rahul Jaiswal" placeholder="Name" />
                  <FormLabel mt="4">Mobile Number</FormLabel>
                  <InputGroup>
                    <InputLeftAddon p="6">+91</InputLeftAddon>
                    <Input p="6" type="tel" readOnly value="9999999999" placeholder="Phone number" />
                  </InputGroup>
                  <FormLabel mt="4">Email Address</FormLabel>
                  <Input p="6" type="email" readOnly value="xyz@gmail.com" placeholder="Email" />
                  <FormLabel mt="4">Billing Address</FormLabel>
                  <Select h="50px" placeholder="Select option">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  <Select pt="3" h="50px" placeholder="Select option">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  <Select pt="3" h="50px" placeholder="Select option">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  <Button
                    width="100%"
                    mt="4"
                    p="6"
                    sx={{
                      backgroundColor: "#000 !important",
                      fontSize: "16px",
                      color: "#fff",
                      fontWeight: "600",
                    }}
                    variant="solid"
                    cursor="pointer"
                    _hover={{
                      bg: "#fff !important ",
                      color: "#000",
                      border: "1px solid ",
                    }}
                  >
                    Buy Now
                  </Button>
                </FormControl>
              </Box>
            </TabPanel>
            <TabPanel>
              <FormControl display="flex" gap="1" flexWrap="wrap" mt="4">
                <InputGroup size="md" alignItems="center">
                  <Input
                    // pr='4.5rem'
                    p="6"
                    type="text"
                    placeholder="Enter Coupon Code"
                  />
                  <InputRightElement width="4.5rem" p="6">
                    <Button h="2rem" size="md" variant="text">
                      Apply
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <UnorderedList listStyleType="none" mt="8rem">
                <ListItem
                  key="1"
                  pt="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  color="#455564"
                  fontSize="18px"
                  fontWeight="500"
                >
                  <Text>Sub total</Text>
                  <Text>₹ 20,000</Text>
                </ListItem>
                <ListItem
                  pt="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  color="#455564"
                  fontSize="18px"
                  fontWeight="500"
                >
                  <Text>Tax</Text>
                  <Text>₹ 999</Text>
                </ListItem>
                <ListItem
                  pt="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  color="#455564"
                  fontSize="18px"
                  fontWeight="500"
                >
                  <Text>Discount</Text>
                  <Text>-₹ 99</Text>
                </ListItem>
                <Divider />
                <ListItem
                  pt="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  fontSize="22px"
                  fontWeight="600"
                >
                  <Text>Total</Text>
                  <Text>₹ 20,900</Text>
                </ListItem>
              </UnorderedList>
              <Button
                width="100%"
                mt="4"
                p="6"
                sx={{
                  backgroundColor: "#000 !important",
                  fontSize: "16px",
                  color: "#fff",
                  fontWeight: "600",
                }}
                variant="solid"
                cursor="pointer"
                _hover={{
                  bg: "#fff !important ",
                  color: "#000",
                  border: "1px solid ",
                }}
              >
                Proceed to pay
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </FeedsLayout>
  );
};

export default PaymentPage;
