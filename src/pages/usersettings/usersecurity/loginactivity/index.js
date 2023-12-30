import UserSettingLayout from "@/components/layouts/userSettingLayout";
import { Box, Card, CardBody, CardHeader, HStack, Stack, Text } from "@chakra-ui/react";
import { ArrowLeft, Dot, MapPin } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { getLoginActivity, deleteLoginActivity } from "@/api/security/loginActivity";

const LoginActivity = () => {
  const router = useRouter();
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getUserLoginActivity", uid],
    queryFn: () => getLoginActivity(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res?.data.data.loginActivity?.data),
  });
  console.log(data);
  return (
    <UserSettingLayout>
    <Box>
      <Card>
        <CardHeader>
          <HStack>
            <Box onClick={() => router.back()}>
              {" "}
              <ArrowLeft />
            </Box>
            <Text fontSize="18px" fontWeight="600">
              My Login Activity
            </Text>
          </HStack>
        </CardHeader>
        <CardBody>
          <Stack>
            <Text>Where You're Logged In</Text>
            {state?.map((item, ind) => (
              <>
                <HStack key={ind} align="center" justify="space-between">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <MapPin />
                    </Box>
                    <Box pl="4">
                      <p style={{ fontSize: "18px", color: "#171717" }}>{item.location}</p>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#24B670",
                          display: "flex",
                        }}
                      >
                        {item?.status || "Active"} <Dot />
                        <span style={{ color: "#455564" }}>{item.deviceInfo}</span>
                      </p>
                    </Box>
                  </Box>
                </HStack>
              </>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Box>
    </UserSettingLayout>
  );
};


export default LoginActivity;
