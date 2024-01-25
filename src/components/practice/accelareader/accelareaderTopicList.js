import BackButton from "@/components/common/backButton";
import { Box, Button, Divider, Flex, HStack, Radio, Stack, Text } from "@chakra-ui/react";
import { Modal } from "antd";
import { ArrowLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";

const AccelareaderTopicList = ({ isOpen, onClose }) => {

 const router = useRouter();


  const handleRadioChange = (topicId) => {
    // Assuming you have a common route and you append the topicId to it
    const route = `/practice/accelareader/${topicId}`;
    router.push(route);
  };

  return (
    <>
      <Modal
        width="600px"
        title={
          <Flex alignItems="center">
            <ArrowLeft onClick={() => onClose(false)} />
            <Box>
              <Text fontSize="16px" fontWeight="600">
                Select the topic
              </Text>
            </Box>
          </Flex>
        }
        centered
        open={isOpen}
        onOk={() => onClose(false)}
        onCancel={() => onClose(false)}
        closable={false}
        footer={null}
      >
        <Stack height="50vh" overflowY="scroll">
          {[...Array(5)].map((data, i) => (
            <>
              <Radio key={i} size="md" name="1" pl="3" colorScheme="green" py="3" onChange={() => handleRadioChange(i)}>
                English Language
              </Radio>
              <Divider />
            </>
          ))}
        </Stack>
        <Button
          width="100%"
          sx={{
            bg: "black !important",
            color: "#fff",
            margin: "0 auto",
            fontSize: "12px",
          }}
          variant="solid"
        >
          Done
        </Button>
      </Modal>
    </>
  );
};

export default AccelareaderTopicList;
