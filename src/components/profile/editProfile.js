import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
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
import { useQuery, useMutation } from "react-query";
import { getProfileInfo } from "@/api/profile";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetailedData } from "@/store/slices/userSlice";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfileInfo } from "@/api/profile";
import { useFormik } from "formik";
import * as Yup from "yup";
import { commonValidationSchema } from "@/utilities/validationSchema";

const EditProfile = () => {
  const [updateProfile, setUpdateProfile] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const router = useRouter();
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      bio: "",
      dob: "",
      gender: "",
      education: "",
      workEx: "",
      medicalCondition: "",
    },
    validationSchema: commonValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      mutation.mutate(values);
    },
  });
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
  const mutation = useMutation({
    mutationFn: (payload) => updateProfileInfo(uid, payload),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.success("Changes successful!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setUpdateProfile(true);
      console.log(res);
    },
    onSettled: (data, error, variables, context) => {},
  });

  return (
    <>
      <Box>
        <Card>
          <CardBody alignItems="center" justifyContent="center" p="6">
            <Box position="relative">
              <Box height="130px" bg="#F1F2F6" rounded="lg">
                <HStack p="2" align="center" justify="flex-end">
                  <Box
                    p="1"
                    boxSize="30px"
                    color="white.900"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                    onClick={(e) => router.push("/usersettings")}
                    rounded="full"
                    bg="#8D96A5"
                  >
                    <Image alt="setting icon" src="/setting.svg" />
                  </Box>
                  {!updateProfile ? (
                    ""
                  ) : (
                    <Box
                      p="1"
                      boxSize="30px"
                      color="white.900"
                      cursor="pointer"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      rounded="full"
                      bg="#8D96A5"
                      onClick={() => setUpdateProfile(false)}
                    >
                      <Image src="/pentab.svg" alt="pen tab icon" />
                    </Box>
                  )}
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
                    objectFit="contain"
                    width="100%"
                    height="100%"
                    src={state?.profile_pic ? state.profile_pic : "/noImage.svg"}
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
              <Box py="3" pr="4" width="48%">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  readOnly={updateProfile}
                  value={state?.name}
                  placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // value={formik.values.name}
                  name="name"
                />
                {!updateProfile && formik.touched.name && formik.errors.name && (
                  <Text style={{ color: "red", marginTop: "8px", fontSize: "14px" }}>{formik.errors.name}</Text>
                )}
              </Box>
              <Box py="3" pl="4" width="48%">
                <FormLabel>Phone</FormLabel>
                <InputGroup>
                  {/* eslint-disable-next-line */}
                  <InputLeftAddon children="+91" />
                  <Input
                    type="number"
                    maxLength="10"
                    readOnly={updateProfile}
                    value={state?.phone}
                    placeholder="Phone number"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </InputGroup>
                {!updateProfile && formik.touched.phone && formik.errors.phone && (
                  <Text style={{ color: "red", marginTop: "8px", fontSize: "14px" }}>{formik.errors.phone}</Text>
                )}
              </Box>
              <Box py="3" pr="4" width="48%">
                <FormLabel>Email Id</FormLabel>
                <Input
                  type="email"
                  readOnly={updateProfile}
                  value={state?.email}
                  placeholder="Email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!updateProfile && formik.touched.email && formik.errors.email && (
                  <Text style={{ color: "red", marginTop: "8px", fontSize: "14px" }}>{formik.errors.email}</Text>
                )}
              </Box>
              <Box width="100%">
                <FormLabel>Bio</FormLabel>
                <Textarea placeholder="Here is a sample placeholder" readOnly={updateProfile} value={state?.bio} />
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
              <Box py="3" pr="4" width="48%">
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  type="date"
                  placeholder="DoB"
                  value={state?.dob}
                  readOnly={updateProfile}
                  id="dob"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="dob"
                />
                {!updateProfile && formik.touched.dob && formik.errors.dob && (
                  <Text style={{ color: "red", marginTop: "8px", fontSize: "14px" }}>{formik.errors.dob}</Text>
                )}
              </Box>
              <Box py="3" pl="4" width="48%">
                <FormLabel>Gender</FormLabel>
                <Input
                  type="text"
                  readOnly={updateProfile}
                  value={state?.gender}
                  placeholder="Gender"
                  name="gender"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!updateProfile && formik.touched.gender && formik.errors.gender && (
                  <Text style={{ color: "red", marginTop: "8px", fontSize: "14px" }}>{formik.errors.gender}</Text>
                )}
              </Box>
              <Box py="3" pr="4" width="48%">
                <FormLabel>Education</FormLabel>
                <Input
                  type="text"
                  placeholder="Education"
                  readOnly={updateProfile}
                  value={state?.education}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="education"
                />
                {!updateProfile && formik.touched.education && formik.errors.education && (
                  <Text style={{ color: "red", marginTop: "8px", fontSize: "14px" }}>{formik.errors.education}</Text>
                )}
              </Box>
              <Box py="3" pl="4" width="48%">
                <FormLabel>Work Experience</FormLabel>
                <Input
                  type="text"
                  placeholder="Experience"
                  readOnly={updateProfile}
                  value={state?.workEx}
                  name="workEx"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!updateProfile && formik.touched.workEx && formik.errors.workEx && (
                  <Text style={{ color: "red", marginTop: "8px", fontSize: "14px" }}>{formik.errors.workEx}</Text>
                )}
              </Box>
              <Box py="3" pr="4" width="48%">
                <FormLabel>Medical Conditiom</FormLabel>
                <Input
                  type="text"
                  placeholder="Medical Conditiom"
                  readOnly={updateProfile}
                  value={state?.medicalCondition}
                  name="medicalCondition"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!updateProfile && formik.touched.medicalCondition && formik.errors.medicalCondition && (
                  <Text style={{ color: "red", marginTop: "8px", fontSize: "14px" }}>
                    {formik.errors.medicalCondition}
                  </Text>
                )}
              </Box>
            </FormControl>
          </CardBody>
          {!updateProfile ? (
            <CardFooter>
              <Button
                w="full"
                onClick={formik.handleSubmit}
                sx={{
                  bg: "black !important",
                  color: "#fff",
                  margin: "0 auto",
                  fontSize: "14px",
                }}
                variant="solid"
              >
                Update Profile
              </Button>
            </CardFooter>
          ) : (
            ""
          )}
        </Card>
      </Box>
      <ToastContainer />
    </>
  );
};

export default EditProfile;
