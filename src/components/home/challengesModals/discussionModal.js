import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Stack,
  HStack,
  Box,
  Menu,
  MenuButton,
  Text,
  MenuList,
  MenuItem,
  Flex,
  Image,
  UnorderedList,
  ListItem,
  Textarea,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";

const DiscussionModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
        }}
      >
        <ModalOverlay />
        <ModalContent bg="white.900" color="#000" height="80vh" overflow="hidden">
          <ModalBody>
            <Flex alignItems="center" justifyContent="space-between">
              <Text>New Discussion</Text>
              <Menu isLazy>
                <MenuButton border="1px solid #8D96A5" rounded="lg" p="1">
                  <Box display="flex" alignItems="center">
                    <Text fontSize="14px">Public</Text>
                    <ChevronDown size="14px" />
                  </Box>
                </MenuButton>
                <MenuList>
                  <MenuItem>Beginner</MenuItem>
                  <MenuItem>Beginner</MenuItem>
                  <MenuItem>Beginner</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Stack direction="column" pt="4">
              <HStack align="center">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "280px",
                  }}
                >
                  <Image boxSize="2.5rem" borderRadius="md" src="/man1.jpg" alt="user profile image" mr="12px" />
                  <Box>
                    <p style={{ fontSize: "16px", color: "#171717" }}>Himanshu Rohila</p>
                    <p style={{ fontSize: "12px", color: "#636363" }}>Grand Master</p>
                  </Box>
                </Box>
              </HStack>
              <Box pt="2">
                <Textarea
                  border="none"
                  draggable={false}
                  maxLength={100}
                  placeholder="Write your post here..."
                  resize="none"
                />
              </Box>
              <Box borderBottom="1px solid" height="30vh"></Box>
              <Box>
                <UnorderedList listStyleType="none">
                  <ListItem py="3" display="flex" gap="4" alignItems="center">
                    <Image alt="img icon" src="/colorImage.svg" /> <Text>Photo or Video</Text>
                  </ListItem>
                  <ListItem py="3" display="flex" gap="4" alignItems="center">
                    <Image alt="poll icon" src="/Poll.svg" /> <Text>Poll</Text>
                  </ListItem>
                  <ListItem py="3" display="flex" gap="4" alignItems="center">
                    <Image alt="megaphone icon" src="/Megaphone copy.svg" /> <Text>Create Meme</Text>
                  </ListItem>
                  <ListItem py="3" display="flex" gap="4" alignItems="center">
                    <Image alt="paperchip" src="/Paperclip.svg" /> <Text>Upload Document</Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button
              w="full"
              sx={{
                bg: "black !important",
                color: "#fff",
                fontSize: "12px",
              }}
              variant="solid"
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DiscussionModal;
