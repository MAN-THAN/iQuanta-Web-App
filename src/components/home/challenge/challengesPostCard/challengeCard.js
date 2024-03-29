import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {  MoreVertical, } from "lucide-react";
import { MdPlayArrow } from "react-icons/md";
import AvatarGroups from "@/components/common/avatarGroups";
import { useSelector } from "react-redux";
import { getTimeAgo } from "@/utilities/utilityFunction";

const ChallengeCard = ({ challengeData , handleJoinChallenge,handleViewChallenge }) => {
  const {_id:uid} = useSelector((state) => state?.userData);
  const { title, timePerQuestion, totalQuestions, createdAt, difficultyLevel,createdBy } = challengeData || {};
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
              src={createdBy?.profilePic}
              alt="Profile Image"
            />
          </Box>
          <Box ml="2">
            <Box display="flex" alignItems="center">
              <p style={{ fontSize: "14px", color: "#171717", fontWeight: "600" }}>{createdBy?.name}</p> <MdPlayArrow />{" "}
              {/* <p style={{ fontSize: "14px", color: "#171717", fontWeight: "400" }}>Posted in CAT 2021</p> */}
            </Box>
            <p style={{ fontSize: "14px", color: "#636363" }}>{getTimeAgo(createdAt)}</p>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="4">
          <MoreVertical size="24px" />
        </Box>
      </HStack>
      <Stack p="4">
        <Text>Let’s see who comes on top!</Text>
        <Box bg="brand.900" color="white.900" p="6" rounded="2xl" position="relative" overflow="hidden">
          <Box position="absolute" top="0" right="0">
            <Image alt="vector img" src="/Vector103.svg" />
          </Box>
          <AvatarGroups size="md" />
          <Text fontSize="22px" fontWeight="500" pt="4">
            {title}{" "}
          </Text>
          <TableContainer py="4">
            <Table size="sm" variant="unstyled" spacing="0">
              <Thead>
                <Tr color="#FFFFFFBF">
                  <Th width="100px" fontSize="16px" fontWeight="400" px="0">
                    Questions
                  </Th>
                  <Th width="150px" fontSize="16px" fontWeight="400" px="0">
                    Time per Question
                  </Th>
                  <Th width="200px" fontSize="16px" fontWeight="400" px="0">
                    Difficulty
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontSize="18px" fontWeight="500" padding="0">
                    {totalQuestions}
                  </Td>
                  <Td fontSize="18px" fontWeight="500" padding="0">
                    {timePerQuestion} sec
                  </Td>
                  <Td fontSize="18px" fontWeight="500" padding="0">
                    Beginner
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Flex alignItems="center" justifyContent="space-between" pt="5">
            <Box>
              <Text>
                Starting in <span className="font-bold">1m 30s</span>
              </Text>
            </Box>
            {createdBy?._id!==uid&& <Button
              // margin="auto 0"
              width="250px"
              variant="solid"
              color="#fff"
              backgroundColor="#000"
              _hover={{ color: "#000", backgroundColor: "#fff", border: "1px solid #000" }}
              onClick={handleJoinChallenge}
            >
              Join Now
            </Button>}
            {createdBy?._id==uid&&<Button
              // margin="auto 0"
              width="250px"
              variant="solid"
              color="#fff"
              backgroundColor="#000"
              _hover={{ color: "#000", backgroundColor: "#fff", border: "1px solid #000" }}
              onClick={handleViewChallenge}
            >
              View Details
            </Button>}
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default ChallengeCard;
