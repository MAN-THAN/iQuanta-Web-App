import UserSettingLayout from "@/components/layouts/userSettingLayout";
import { Box, Button, Card, CardBody, CardHeader, Divider, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { ArrowLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { getSearchHistory } from "@/api/security/searchHistory";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const SearchHistory = () => {
  const router = useRouter();
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getUserSearchHistory", uid],
    queryFn: () => getSearchHistory(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res?.data.data.searchHistory?.data),
  });
  console.log(data);
  //delete search history
  return (
    <Box>
      <Card>
        <CardHeader>
          <HStack>
            <Box onClick={() => router.back()}>
              {" "}
              <ArrowLeft />
            </Box>
            <Text fontSize="18px" fontWeight="600">
              My Search History
            </Text>
          </HStack>
        </CardHeader>
        <CardBody>
          <Stack>
            {state?.map((item, ind) => (
              <>
                <HStack key={ind} align="center" justify="space-between">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box boxSize="40px" rounded="md">
                      <Image
                        rounded="md"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        src="/static/images/Profile.jpeg"
                        alt="Profile Image"
                      />
                    </Box>
                    <Box pl="4">
                      <p style={{ fontSize: "16px", color: "#171717" }}> {item?.searchQuery}</p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#636363",
                          display: "flex",
                        }}
                      >
                        {item?.searchCategory}
                      </p>
                    </Box>
                  </Box>
                  <X cursor="pointer" />
                </HStack>
              </>
            ))}
            <Divider pt="2" />
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

SearchHistory.getLayout = (page) => <UserSettingLayout>{page}</UserSettingLayout>;

export default SearchHistory;
