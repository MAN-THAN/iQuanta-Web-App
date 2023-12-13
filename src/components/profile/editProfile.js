import {
  Badge,
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react";
import { PenSquare, Settings } from "lucide-react";
import { BsDot } from "react-icons/bs";
import { useRouter } from "next/navigation";
import FullProfileView from "./fullProfileView";
import { useQuery } from "react-query";
import { getProfileInfo } from "@/api/profile";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetailedData } from "@/store/slices/userSlice";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const router = useRouter();
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getUserDetailData", uid],
    queryFn: () => getProfileInfo(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res.data.data.user_data),
  });
  console.log(state);

  return (
    <>
      <Box>
        <Card>
          <CardBody alignItems="center" justifyContent="center" p="6">
            <Box position="relative">
              <Box height="130px" bg="#F1F2F6" rounded="lg">
                <HStack p="2" align="center" justify="flex-end">
                  <Box p="1" onClick={(e) => router.push("/usersettings")} rounded="full" bg="#8D96A5">
                    <Settings />
                  </Box>
                  <Box p="1" rounded="full" bg="#8D96A5" onClick={(e) => router.push("/useraccount/updateprofile")}>
                    <PenSquare />
                  </Box>
                </HStack>
              </Box>
              <Box
                onClick={onOpen}
                position="absolute"
                left="50%"
                transform="translateX(-50%)"
                top="40%"
                bg="#fff"
                rounded="full"
              >


                <Box boxSize="130px" rounded="full">
                  <Image
                    rounded="full"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    src={state?.profile_pic ? state.profile_pic :"/noImage.svg"}
                    alt="Profile Image"
                  />
                </Box>
              </Box>
            </Box>
            <FullProfileView isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

            <Box mt="16">
              <Text fontSize="2xl" textAlign="center" fontWeight="600" color="heading.900">
                {state?.name}
              </Text>
              <Flex align="center" justify="center" fontSize="md" color="text.700">
                <span>{state?.gender},23 years</span>
                <span>
                  <BsDot />
                </span>
                <span>Mumbai, Maharashtra </span>
              </Flex>
            </Box>
            <Flex align="center" justify="center" gap={3} pt="4">
              {state?.exams?.map((item, ind) => {
                return (
                  <Badge key={ind} px="4" py="2" rounded="2xl" color="text.900" colorScheme="green">
                    {item}
                  </Badge>
                );
              })}
            </Flex>
            <Box fontSize="md" pt="5">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex esse laborum error, possimus culpa tenetur
                aliquam neque corrupti excepturi ratione expedita illum amet saepe tempore voluptas. Corporis animi
                veniam accusamus!
              </p>
            </Box>
          </CardBody>
        </Card>
        <Card mt="1">
          <CardBody alignItems="center" justifyContent="center" p="6">
            <Text textAlign="start" color="heading.700" fontWeight="semibold" fontSize="lg">
              My Details
            </Text>
            <FormControl display="flex" gap="1" flexWrap="wrap" mt="4">
              <Box width="48%">
                <FormLabel>Name</FormLabel>
                <Input type="text" readOnly value={state?.name} placeholder="Name" />
              </Box>
              <Box width="48%">
                <FormLabel>Phone</FormLabel>
                <InputGroup>
                  {/* eslint-disable-next-line */}
                  <InputLeftAddon children="+91" />
                  <Input type="tel" readOnly value={state?.phone} placeholder="Phone number" />
                </InputGroup>
              </Box>
              <Box width="48%">
                <FormLabel>Email Id</FormLabel>
                <Input type="email" readOnly value={state?.email} placeholder="Email" />
              </Box>
              <Box width="100%">
                <FormLabel>Bio</FormLabel>
                <Textarea
                  placeholder="Here is a sample placeholder"
                  readOnly
                  value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex esse laborum error, possimus culpa tenetur aliquam neque corrupti excepturi ratione expedita illum amet saepe tempore voluptas. Corporis animi veniam accusamus!"
                />
              </Box>
            </FormControl>
            <Text
              resize="none"
              overflow="scroll"
              css={{
                "&::-webkit-scrollbar": {
                  width: "0.5em",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "transparent",
                },
              }}
              textAlign="start"
              color="heading.700"
              fontWeight="semibold"
              fontSize="lg"
              mt="4"
            >
              My Personal Information
            </Text>
            <FormControl display="flex" gap="1" flexWrap="wrap" mt="4">
              <Box width="48%">
                <FormLabel>Date of Birth</FormLabel>
                <Input type="text" placeholder="DoB" value={state?.dob} readOnly />
              </Box>
              <Box width="48%">
                <FormLabel>Gender</FormLabel>
                <Input type="text" readOnly value={state?.gender} placeholder="Gender" />
              </Box>
              <Box width="48%">
                <FormLabel>Education</FormLabel>
                <Input type="text" placeholder="Education" readOnly value="BCA" />
              </Box>
              <Box width="48%">
                <FormLabel>Work Experience</FormLabel>
                <Input type="text" placeholder="Experience" readOnly value="2 Year" />
              </Box>
              <Box width="48%">
                <FormLabel>Medical Conditiom</FormLabel>
                <Input type="text" placeholder="Medical Conditiom" readOnly value="None" />
              </Box>
            </FormControl>
          </CardBody>
        </Card>
      </Box>
      <ToastContainer />
    </>
  );
};

export default EditProfile;
