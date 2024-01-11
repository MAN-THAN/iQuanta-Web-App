import { Button, FormControl, FormLabel, Image, Input, InputGroup, InputLeftAddon, Textarea } from "@chakra-ui/react";
import { Box, Card, CardBody, CardHeader, HStack, Text } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { createCounselling } from "@/api/profile/profileSettings/help";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const CounsellingForm = () => {
  const router = useRouter();
  const { _id: uid } = useSelector((state) => state.userData);
  const mutation = useMutation({
    mutationFn: (payload) => createCounselling(uid, payload),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.success("Successful!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(res);
      router.push("/usersettings/userhelp/counselling/confirmed");
    },
    onSettled: (data, error, variables, context) => {},
  });
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      agenda: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });
  return (
    <>
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
                  name="fullname"
                  id="fullname"
                  value={formik.values.fullname}
                  type="text"
                  placeholder="Name"
                  onChange={formik.handleChange}
                />
              </Box>

              <Box>
                <FormLabel>Email ID*</FormLabel>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  value={formik.values.email}
                  placeholder="Email"
                  onChange={formik.handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Mobile Number*</FormLabel>
                <InputGroup>
                  <InputLeftAddon>+91</InputLeftAddon>
                  <Input
                    name="phone"
                    id="phone"
                    type="tel"
                    value={formik.values.phone}
                    placeholder="Phone number"
                    onChange={formik.handleChange}
                  />
                </InputGroup>
              </Box>

              <Box>
                <FormLabel>Tell us the agenda in a few words</FormLabel>
                <Textarea
                  name="agenda"
                  id="agenda"
                  placeholder="Here is a sample placeholder"
                  value={formik.values.agenda}
                  onChange={formik.handleChange}
                />
              </Box>
              <Button
                onClick={formik.handleSubmit}
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
      <ToastContainer />
    </>
  );
};

export default CounsellingForm;
