import { useState } from "react";
import { Modal, Space } from "antd";
import { Box, Button, HStack, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import { ArrowLeft, Dot } from "lucide-react";
const BlockedAccount = ({ isOpen, onClose }) => {
  const [value, setValue] = useState('1')

  return (
    <>
      <Modal
        title={
          <Space>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => onClose(false)}
            >
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
        <div style={{
          overflow: "scroll",
          height: "500px",
        }}>
          <UnorderedList spacing='3' listStyleType='none'>
            {[...Array(10)].map((data, index) => (
              <ListItem key={index}>
                <HStack align="center" justify='space-between'>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                  }}>
                    <Box boxSize='50px' rounded='md'>
                      <Image
                        rounded='md'
                        objectFit='cover'
                        width='100%'
                        height='100%'
                        src="/static/images/Profile.jpeg"
                        alt="Profile Image"
                      />
                    </Box>
                    <Box pl='4'>
                      <p style={{ fontSize: "18px", color: "#171717" }}>Gourav</p>
                      <p style={{ fontSize: "14px", color: "#636363", display: 'flex' }}>CAT <Dot /> GRE</p>
                    </Box>
                  </Box>
                  <Box pr='2'>
                    <Button
                      size="sm"
                      fontSize="12px"
                      variant="outline"
                    >Unblock</Button>
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
