import BackButton from "@/components/common/backButton";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, Minus, Plus, SearchIcon } from "lucide-react";

const AccelareaderShortcuts = () => {
  return (
    <>
      <Box mt="4" bg="#fff" roundedTop="2xl" p="4">
        <HStack py="4">
          <BackButton />
          <Box>
            <Text fontSize="16px" fontWeight="600">
              Accelareader
            </Text>
            <Text fontSize="12px" color="#636363">
              Practice
            </Text>
          </Box>
        </HStack>
        <Text p="4" py="4">
          Accelareader will help you read faster by flashing words at you using what is called a Rapid Serial Visual
          Presentation. Practice speed reading and save precious time during your final exam.
        </Text>
      </Box>
      <Box mt="4" bg="#fff" p="4">
        <Box display="flex" justifyContent="flex-end" width="100%">
          <HStack pr="2" pb="2">
            <IconButton
              sx={{
                bg: "black !important",
                color: "#fff",
                margin: "0 auto",
                fontSize: "12px",
              }}
              margin="0 auto"
              aria-label="Search database"
              icon={<Image src="/Repeat.svg" />}
            />
            <IconButton
              sx={{
                bg: "black !important",
                color: "#fff",
                margin: "0 auto",
                fontSize: "12px",
              }}
              margin="0 auto"
              aria-label="Search database"
              icon={<Image src="/GearSix.svg" />}
            />
          </HStack>
        </Box>
        <Box h="20vh" bg="brand.800" rounded="xl" display="flex" justifyContent="center" my="4">
          <Center>
            <Text fontSize="18px" fontWeight="600">
              Hello
            </Text>
          </Center>
        </Box>
        <HStack>
          <Text>
            Current Settings :<strong> 200 wpm </strong>
          </Text>
          <Text>
            Text Size :<strong> Small</strong>
          </Text>
        </HStack>
        <Box h="20vh" rounded="xl" border="1px dashed #000" my="4">
          <Text py="4" fontWeight="500" textAlign="center">
            Keyboard Shortcuts
          </Text>
          <Flex justifyContent="space-evenly" alignItems="center">
            <Stack>
              <Text>Restart</Text>
              <Center boxSize="30px" border="1px solid" borderBottom="5px solid #000" rounded="lg">
                R
              </Center>
            </Stack>
            <Stack>
              <Text>Pause/Resume:</Text>
              <Center width="100px" border="1px solid" borderBottom="5px solid #000" rounded="lg">
                space
              </Center>
            </Stack>
            <HStack>
              <Stack>
                <Text>Increase/Decrease wpm (x25):</Text>
                <HStack>
                  <Center boxSize="30px" border="1px solid" borderBottom="5px solid #000" rounded="lg">
                    <Image src="/Polygon.svg" />
                  </Center>
                  <Center boxSize="30px" border="1px solid" borderBottom="5px solid #000" rounded="lg">
                    <Image src="/Polygon2.svg" />
                  </Center>
                </HStack>
              </Stack>
            </HStack>
            <HStack>
              <Stack>
                <Text>Skip words:</Text>
                <HStack>
                  <Center boxSize="30px" border="1px solid" borderBottom="5px solid #000" rounded="lg">
                    <Image src="/PolygonLeft.svg" />
                  </Center>
                  <Center boxSize="30px" border="1px solid" borderBottom="5px solid #000" rounded="lg">
                    <Image src="/PolygonRight.svg" />
                  </Center>
                </HStack>
              </Stack>
            </HStack>
          </Flex>
        </Box>
        <Flex gap="10" my="3">
          <Button
            width="100%"
            marginTop="4"
            border="1px solid"
            sx={{
              bg: "#ffffff !important",
              margin: "0 auto",
              fontSize: "12px",
            }}
            variant="solid"
          >
            Pause
          </Button>
          <Button
            width="100%"
            marginTop="4"
            sx={{
              bg: "black !important",
              color: "#fff",
              margin: "0 auto",
              fontSize: "12px",
            }}
            variant="solid"
          >
            Stop
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default AccelareaderShortcuts;
