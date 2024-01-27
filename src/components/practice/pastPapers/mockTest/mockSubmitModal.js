import { Image } from "@chakra-ui/react";
import { Modal } from "antd";
import React from "react";

const MockSubmitModal = () => {
  return (
    <>
      <Modal
        width="420px"
        title={
          <Flex justifyContent="space-between">
            <span style={{ fontSize: "18px", fontWeight: "600" }}>Group Members</span>
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
        <Image src=""/>
       </Box>

      </Modal>
    </>
  );
};

export default MockSubmitModal;
