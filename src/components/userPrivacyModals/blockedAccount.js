import { useState } from "react";
import { Modal, Space } from "antd";
import { Box, Button, HStack, Image, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import { ArrowLeft, Dot } from "lucide-react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { getBlockList } from "@/api/profile/profileSettings";
import { useSelector } from "react-redux";
import { updateBlockStatus } from "@/api/profile/profileSettings";
import { removeBlockedUser } from "@/api/profile/profileSettings";

const BlockedAccount = ({ isOpen, onClose }) => {
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const queryClient = useQueryClient();
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getBlockList", uid],
    queryFn: () => getBlockList(uid),
    onError: (error, variables, context) =>
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res.data.data.blockList),
  });
  console.log(state);
  const mutation = useMutation({
    mutationFn: (friendId) => removeBlockedUser(uid, friendId),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
     
      console.log(res);
      queryClient.invalidateQueries("getBlockList"); 
    },
    onSettled: (data, error, variables, context) => {},
  });
  return (
    <>
      <Modal
        title={
          <Space>
            <span style={{ cursor: "pointer" }} onClick={() => onClose(false)}>
              <ArrowLeft />
            </span>
            <span style={{ fontSize: "18px", fontWeight: "600" }}>Blocked Accounts</span>
          </Space>
        }
        centered
        open={isOpen}
        onOk={() => onClose(false)}
        onCancel={() => onClose(false)}
        closable={false}
        footer={null}
      >
        <div
          style={{
            overflow: "scroll",
            height: "500px",
          }}
        >
          <UnorderedList spacing="3" listStyleType="none">
            {state?.length === 0 ? (<Text fontSize={'medium'} marginTop={8} align={"center"}>No user in block list</Text>) : state?.map((item, index) => (
              <ListItem key={index}>
                <HStack align="center" justify="space-between">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box boxSize="50px" rounded="md">
                      <Image
                        rounded="md"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        src={item?.profilePic}
                        alt="Profile Image"
                      />
                    </Box>
                    <Box pl="4">
                      <p style={{ fontSize: "18px", color: "#171717" }}>{item?.name}</p>
                      {item?.exams?.map((item, ind) => (
                        <p key={ind} style={{ fontSize: "14px", color: "#636363", display: "flex" }}>
                          {item} <Dot />
                        </p>
                      ))}
                    </Box>
                  </Box>
                  <Box pr="2">
                    <Button size="sm" fontSize="12px" variant="outline" onClick={() => mutation.mutate(item?._id)}>
                      Unblock
                    </Button>
                  </Box>
                </HStack>
              </ListItem>
            ))}
          </UnorderedList>
        </div>
      </Modal>
    </>
  );
};
export default BlockedAccount;
