import BackButton from "@/components/common/backButton";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Modal } from "antd";
import { ArrowLeft, ChevronDownIcon, Minus, Plus } from "lucide-react";

const AccelareaderSetting = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        width="600px"
        title={
          <HStack py="2">
            <ArrowLeft onClick={onClose} />
            <Box>
              <Text fontSize="16px" fontWeight="600">
                Setting
              </Text>
            </Box>
          </HStack>
        }
        centered
        open={isOpen}
        onOk={() => onClose(false)}
        onCancel={() => onClose(false)}
        closable={false}
        footer={null}
      >
        <Card bg="#fff" roundedTop="2xl" h="60vh" border='none' shadow='none'>
          <CardBody>
            <HStack gap="30" py="4">
              <FormControl>
                <FormLabel>Speed (Words per minute)</FormLabel>
                <Box border="1px solid #8D96A5" rounded="lg" p="1" width="48%">
                  <Box display="flex" justifyContent="space-between" alignItems="center" fontSize="14px">
                    <Minus size="18px" />
                    <Text>20</Text>
                    <Plus size="18px" />
                  </Box>
                </Box>
              </FormControl>
              <FormControl>
                <FormLabel>Text Size</FormLabel>
                <Menu>
                  <MenuButton border="1px solid #8D96A5" rounded="lg" p="1" bg="#fff">
                    <HStack px="4">
                      <Text>Medium</Text>
                      <ChevronDownIcon size="12px" />
                    </HStack>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Medium</MenuItem>
                    <MenuItem>Easy</MenuItem>
                    <MenuItem>Hard</MenuItem>
                  </MenuList>
                </Menu>
              </FormControl>
            </HStack>
            <HStack gap="30" py="4">
              <FormControl>
                <FormLabel>No. of words</FormLabel>
                <Box border="1px solid #8D96A5" rounded="lg" p="1" width="18%">
                  <Box display="flex" justifyContent="space-between" alignItems="center" fontSize="14px">
                    <Minus size="18px" />
                    <Text>10</Text>
                    <Plus size="18px" />
                  </Box>
                </Box>
              </FormControl>
            </HStack>
          </CardBody>
          <CardFooter>
            <Button
              width="100%"
              sx={{
                bg: "black !important",
                color: "#fff",
                fontSize: "12px",
              }}
              variant="solid"
            >
              Start
            </Button>
          </CardFooter>
        </Card>
      </Modal>
    </>
  );
};

export default AccelareaderSetting;
