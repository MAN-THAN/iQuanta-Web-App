import {
  Box,
  Flex,
  HStack,
  Image,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { MdPlayArrow } from "react-icons/md";

const ChallengeLeaderbordCard = ({ classId }) => {
  const router = useRouter();

  return (
    <Box bg="#fff" mt="1">
      <HStack align="center" justifyContent="space-between" padding={["3", null, "4"]}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box boxSize="40px">
            <Image
              objectFit="cover"
              width="100%"
              height="100%"
              className="rounded-md"
              src="/profile.jpeg"
              alt="Profile Image"
            />
          </Box>
          <Box ml="2">
            <Box display="flex" alignItems="center">
              <p style={{ fontSize: "14px", color: "#171717", fontWeight: "600" }}>Hardik Beniwal</p> <MdPlayArrow />{" "}
              <p style={{ fontSize: "14px", color: "#171717", fontWeight: "400" }}>Posted in CAT 2021</p>
            </Box>
            <p style={{ fontSize: "14px", color: "#636363" }}>2h ago</p>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="4">
          <MoreVertical size="24px" />
        </Box>
      </HStack>
      <Box p="4">
        <Box bg="#469AD6" color="white.900" p="6" roundedTop="2xl" position="relative" overflow="hidden">
          <Box position="absolute" top="0" right="0">
            <Image alt="vector img" src="/Vector103.svg" />
          </Box>
          <Text>5 Member</Text>
          <Text fontSize="22px" fontWeight="500" pt="4">
            Reasoning: Verbal
          </Text>
          <TableContainer py="4">
            <Table size="sm" variant="unstyled" spacing="0">
              <Thead>
                <Tr color="#FFFFFFBF">
                  <Th width="100px" fontSize="16px" fontWeight="400" px="0">
                    Questions
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontSize="18px" fontWeight="500" padding="0">
                    6/10
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Flex alignItems="center" justifyContent="space-between" pt="5">
            <Box>
              <Text>
                End in <span className="font-bold">3m 30s</span>
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box bg="#F0F8FF" p="6" roundedBottom="2xl">
          <Text fontSize="16px" color="#000000" fontWeight="400">
            Leaderboard
          </Text>
          <UnorderedList alignItems="center" py="5" listStyleType="none" spacing={10}>
            {[...Array(3)].map((data, i) => (
              <ListItem key={i} alignItems="end">
                <HStack align="center" justifyContent="space-between">
                  <Flex alignItems="center" gap="6">
                    <Text fontSize="16px" color="#000000" fontWeight="400">
                      #{i + 1}
                    </Text>
                    <Box boxSize="35px">
                      <Image
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        className="rounded-md"
                        src="/man3.jpg"
                        alt="Profile Image"
                      />
                    </Box>
                    <Box>
                      <Text fontSize="18px" color="#000000" fontWeight="400">
                        Aniket Shakhya
                      </Text>
                    </Box>
                  </Flex>
                  <Flex align="center">
                    <Text>100</Text>
                  </Flex>
                </HStack>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default ChallengeLeaderbordCard;
