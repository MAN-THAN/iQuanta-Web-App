import { Modal, Space } from "antd";
import { Box, Button, Flex, HStack, Image, Input, InputGroup, InputLeftElement, ListItem, UnorderedList } from "@chakra-ui/react";
import { ArrowLeft, Dot, SearchIcon, X } from "lucide-react";

const GroupInvite = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        width="460px"
        title={
          <Flex justifyContent="space-between">
            <span style={{ fontSize: "18px", fontWeight: "600" }}>Invite</span>
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
       <InputGroup size="md" my='5'>
            <InputLeftElement> 
              <SearchIcon />
            </InputLeftElement>
            <Input pl="3.0rem" placeholder="Search" />
          </InputGroup>
        <div
          style={{
            overflow: "scroll",
            height: "600px",
          }}
        >
           
          <UnorderedList spacing="3" listStyleType="none">
            {[...Array(10)].map((data, index) => (
              <ListItem key={index} py='2'>
                <HStack align="center" justify="space-between">
                  <Box display="flex" alignItems="center">
                    <Box boxSize="48px" rounded="md">
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
                      <p style={{ fontSize: "16px", color: "#171717" }}>Gourav</p>
                      <p style={{ fontSize: "14px", color: "#636363", display: "flex" }}>
                        CAT <Dot /> GRE
                      </p>
                    </Box>
                  </Box>
                  <Box pr="2">
                    <Button size="sm" fontSize="12px" variant="outline">
                      Invite
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

export default GroupInvite;
