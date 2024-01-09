import { useState } from "react";
import { Modal, Space } from "antd";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
const ControlPost = ({ isOpen, onClose, setValue, modalType, state }) => {
  console.log(modalType);
  console.log(state?.[modalType]);
  console.log(state)
  return (
    <>
      <Modal
        title={
          <Space>
            <span style={{ cursor: "pointer" }} onClick={() => onClose(false)}>
              <ArrowLeft />
            </span>
            {(() => {
              if (modalType === "comments") {
                return (
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>Control who can comment on your post</span>
                );
              } else if (modalType === "mentions") {
                return <span style={{ fontSize: "18px", fontWeight: "600" }}>Control who can mention you</span>;
              } else if (modalType === "invites") {
                return <span style={{ fontSize: "18px", fontWeight: "600" }}>Control who can invite you</span>;
              }
            })()}
            {/* <span style={{ fontSize: "18px", fontWeight: "600" }}>Control who can mention you in post</span> */}
          </Space>
        }
        centered
        open={isOpen}
        onOk={() => onClose(false)}
        onCancel={() => onClose(false)}
        closable={false}
        footer={null}
        width="400px"
      >
        <RadioGroup onChange={setValue} value={state?.[modalType]} py="5">
          <Stack direction="column">
            <Radio value="everyone">Everyone</Radio>
            <Radio value="followers">My Followers</Radio>
            <Radio value="studyPartner">My Study Partners</Radio>
            <Radio value="friends">My Friends</Radio>
          </Stack>
        </RadioGroup>
      </Modal>
    </>
  );
};

export default ControlPost;
