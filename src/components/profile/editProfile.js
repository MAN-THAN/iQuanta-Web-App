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
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getProfileInfo } from "@/api/profile";
import { useDispatch, useSelector } from "react-redux";
import { addUserData, addUserDetailedData } from "@/store/slices/userSlice";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfileInfo } from "@/api/profile";
import { useFormik } from "formik";
import * as Yup from "yup";
import { commonValidationSchema } from "@/utilities/validationSchema";
import { updateProfilePic } from "@/api/profile";

const EditProfile = () => {
  const [updateProfile, setUpdateProfile] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const inputRef = useRef();
  const [tempFiles, setTempFiles] = useState();
  const [profilePic, setProfilePic] = useState();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: state?.name || "",
      phone: state?.phone || "",
      email: state?.email || "",
      bio: state?.bio || "",
      dob: state?.dob || "",
      gender: state?.gender || "",
      graduationStream: state?.graduationStream || "",
      workExperience: state?.workExperience || "",
      medicalCondition: state?.medicalCondition || "",
      address: state?.address[0] || "",
    },
    validationSchema: commonValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      mutation.mutate(values);
      if (profilePic) {
        const formData = new FormData();
        formData.append("type", "profilePic");
        formData.append("thumbnail", tempFiles[0]);
        mutationProfile.mutate(formData);
      }
    },
  });

  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getUserDetailData", uid],
    queryFn: () => getProfileInfo(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => {
      setState(res?.data?.data?.user_data);
      dispatch(addUserData(res?.data?.data?.user_data));
    },
  });
  const mutation = useMutation({
    mutationFn: (payload) => updateProfileInfo(uid, payload),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.success("Changes successful!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setUpdateProfile(true);
      console.log(res);
      queryClient.invalidateQueries("getUserDetailData");
    },
    onSettled: (data, error, variables, context) => {},
  });
  const mutationProfile = useMutation({
    mutationFn: (payload) => updateProfilePic(uid, payload),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.success("Changes successful!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setUpdateProfile(true);
      console.log(res);
      queryClient.invalidateQueries("getUserDetailData");
    },
    onSettled: (data, error, variables, context) => {},
  });
  const handleProfilePic = () => {
    if (!updateProfile) {
      inputRef.current.click();
    } else {
      onOpen();
    }
  };
  const getAge = () => {
    let userCurrentDob = new Date(state?.dob);
    console.log(userCurrentDob.getTime());
    let ageDiff = Date.now() - userCurrentDob.getTime();
    return String(Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365)));
  };
  const handleProfileChange = async (event) => {
    const files = event.target.files;
    setTempFiles(files);
    let fileList = Object.keys(files).map((item) => {
      return URL.createObjectURL(files[item]);
    });
    setProfilePic(fileList[0]);
  };
  console.log(profilePic, "profilePic");
  console.log(tempFiles, "TEMPfILES");

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
                onClick={handleProfilePic}
                position="absolute"
                left="50%"
                transform="translateX(-50%)"
                top="40%"
                bg="#fff"
                rounded="full"
              >
                <Box boxSize="130px" rounded="full" cursor={"pointer"}>
                  <Image
                    rounded="full"
                    objectFit="contain"
                    width="100%"
                    height="100%"
                    src={
                      !updateProfile
                        ? profilePic
                          ? profilePic
                          : "edit-profile-vector-icon.jpg"
                        : state?.profilePic
                        ? state?.profilePic
                        : "/noImage.svg"
                    }
                    alt="Profile Image"
                  />
                  <input
                    id="fileInput1"
                    type="file"
                    ref={inputRef}
                    style={{ display: "none" }}
                    onChange={handleProfileChange}
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
                <span>
                  {state?.gender?.charAt(0).toUpperCase() + state?.gender?.slice(1)},{" " + getAge() + " years"}
                </span>
                <span>
                  <BsDot />
                </span>
                <span>{state?.address?.[0]}</span>
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
              <p>{state?.bio}</p>
            </Box>
          </CardBody>
        </Card>
        <Card mt="1">
          <CardBody alignItems="center" justifyContent="center" p="6">
            <Text textAlign="start" color="heading.700" fontWeight="semibold" fontSize="lg">
              My Details
            </Text>
            <FormControl display="flex" gap="1" flexWrap="wrap" mt="4">
              <Box py="3" width={{ base: "100%", md: "48%" }}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  readOnly={updateProfile}
                  value={formik.values.name}
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
              <Box py="3" width={{ base: "100%", md: "48%" }}>
                <FormLabel>Phone</FormLabel>
                <InputGroup>
                  {/* eslint-disable-next-line */}
                  <InputLeftAddon children="+91" />
                  <Input
                    type="number"
                    maxLength="10"
                    readOnly={updateProfile}
                    value={formik.values.phone}
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
              <Box py="3" width={{ base: "100%", md: "48%" }}>
                <FormLabel>Email Id</FormLabel>
                <Input
                  type="email"
                  readOnly={updateProfile}
                  value={formik.values.email}
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
                <Textarea
                  name="bio"
                  onChange={formik.handleChange}
                  placeholder="Here is a sample placeholder"
                  readOnly={updateProfile}
                  value={formik.values.bio}
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
              <Box py="3" pr="4" width="48%">
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  type="date"
                  placeholder="DoB"
                  value={formik.values.dob}
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
                  value={formik.values.gender}
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
                  value={formik.values.graduationStream}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="graduationStream"
                />
                {!updateProfile && formik.touched.graduationStream && formik.errors.graduationStream && (
                  <Text style={{ color: "red", marginTop: "8px", fontSize: "14px" }}>
                    {formik.errors.graduationStream}
                  </Text>
                )}
              </Box>
              <Box py="3" pl="4" width="48%">
                <FormLabel minW="400px">Work Experience</FormLabel>
                <Input
                  type="text"
                  placeholder="Experience"
                  readOnly={updateProfile}
                  value={formik.values.workExperience}
                  name="workExperience"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!updateProfile && formik.touched.workExperience && formik.errors.workExperience && (
                  <Text style={{ color: "red", marginTop: "8px", fontSize: "14px" }}>
                    {formik.errors.workExperience}
                  </Text>
                )}
              </Box>
              <Box py="3" pr="4" width="48%">
                <FormLabel minW="400px">Medical Condition</FormLabel>
                <Input
                  type="text"
                  placeholder="Medical Conditiom"
                  readOnly={updateProfile}
                  value={formik.values.medicalCondition}
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
              <Box py="3" pr="4" width="48%">
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  placeholder="Your address"
                  readOnly={updateProfile}
                  value={formik.values.address}
                  name="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!updateProfile && formik.touched.address && formik.errors.address && (
                  <Text style={{ color: "red", marginTop: "8px", fontSize: "14px" }}>{formik.errors.address}</Text>
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
