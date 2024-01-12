import { Box, Button, Divider, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Modal } from "antd";

const LockedModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      width="460px"
      title={
        <HStack>
          <Box boxSize="30px" bg="#FFA53B" display='flex' alignItems='center' justifyContent='center' rounded='lg' p='2'>
            <Image src="/LockedWhite.svg" />
          </Box>
          <span style={{ fontSize: "18px", fontWeight: "600" }}>Locked</span>
        </HStack>
      }
      centered
      open={isOpen}
      onOk={() => onClose(false)}
      onCancel={() => onClose(false)}
      closable={false}
      footer={null}
    >
      <Box>
        <Text fontSize="16px" fontWeight="600">
          Vocabulary - Advanced
        </Text>
        <Text py="4" fontSize="12px" color="#8D96A5">
          Learn more difficult words that you might not use on a regular basis
        </Text>
      </Box>
      <Divider py="2" />
      <Text py="4" fontSize="12px" color="#8D96A5">
        To unlock this course, use your coins or subscribe to the course.
      </Text>
      <HStack py='3'>
        <Button
          size="lg"
          width="100%"
          bg="white.900"
          border="1px solid #FFA53B"
          sx={{
            margin: "0 auto",
            fontSize: "16px",
          }}
          variant="solid"
        >
          Unlock with Coins
        </Button>
        <Button
          size="lg"
          width="100%"
          bg="#FFA53B"
          sx={{
            color: "#fff",
            margin: "0 auto",
            fontSize: "16px",
          }}
          variant="solid"
        >
          Subscribe @ ₹799
        </Button>
      </HStack>
    </Modal>
  );
};

export default LockedModal;
