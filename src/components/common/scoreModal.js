import { Box, Center, Flex, Image } from "@chakra-ui/react";
import { Modal } from "antd";
import { X } from "lucide-react";

const ScoreModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      width="460px"
      title={
        <Flex justifyContent="space-between">
          <span style={{ fontSize: "18px", fontWeight: "600" }}>Select Difficulty</span>
          <span style={{ cursor: "pointer" }} onClick={() => onClose(false)}>
            <X />
          </span>
        </Flex>
      }
      centered
      open={isOpen}
      onOk={() => onClose(false)}
      onCancel={() => onClose(false)}
      closable={false}
      footer={null}
    >
      <Box>
        <Center>
          <Box>
            <Image src="/profile.png" />
          </Box>
        </Center>
      </Box>
    </Modal>
  );
};

export default ScoreModal;
