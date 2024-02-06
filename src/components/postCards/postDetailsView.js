import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Flex,
  Box,
  HStack,
  Text,
  Stack,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import EmojiGroup from "../common/avatarGroups";
import { ChevronDownIcon, Dot, MessageCircle, Share2, ThumbsUp } from "lucide-react";
import { getTimeAgo } from "@/utilities/utilityFunction";
import LikeEmojiGroup from "../common/likeEmojiGroup";
import { ReactionPanel } from "../common/reactionPanel";
import CommentSlider from "./commentSlider/commentSlider";

const PostDetailsView = ({
  isOpen,
  onOpen,
  onClose,
  name,
  profilePic,
  media,
  title,
  createdAt,
  userReaction,
  reactionCountDetail,
  followingCount,
  reactionCount,
  commentCount,
  postId,
  topComments
}) => {
  console.log(media)
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent bg="brand.700" padding="10px">
        <ModalCloseButton position="absolute" left="0" bg="#FFFFF" rounded="full" ml="3" />
        <ModalBody height="auto" sx={{ padding: "0 !important" }}>
          <Flex flexWrap={["wrap", null, "nowrap"]}>
            <Box width={["100%", null, "67%"]}>
              <Image
                borderLeftRadius="md"
                src={media?.length > 0 ? media[0] : ""}
                alt="Profile Image"
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
            <Box width={["100%", null, "33%"]}>
              <Stack>
                <HStack align="center" padding={["3", null, "4"]}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: ["auto", null, "280px"],
                    }}
                  >
                    <Box boxSize="40px">
                      <Image
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        className="rounded-md"
                        src={profilePic}
                        alt="Profile Image"
                      />
                    </Box>
                    <Box ml="2">
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#171717",
                          fontWeight: "600",
                        }}
                      >
                        {name}
                      </p>
                      <p style={{ fontSize: "12px", color: "#636363" }}>{getTimeAgo(createdAt)}</p>
                    </Box>
                  </Box>
                </HStack>
                <HStack align="center" fontWeight="400" fontSize="14px" padding="4">
                  <Box display="flex">
                    <LikeEmojiGroup userReaction={userReaction} reactionCountDetail={reactionCountDetail} />
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#455564",
                        paddingLeft: "5px",
                      }}
                    >
                      {reactionCount}
                    </span>
                  </Box>
                  <Box pl="5">
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#455564",
                      }}
                    >
                      {commentCount}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#8D96A5",
                        paddingLeft: "5px",
                      }}
                    >
                      comments
                    </span>
                  </Box>
                  <Dot color="#8D96A5" />
                  <Box>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#455564",
                      }}
                    >
                      {followingCount}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#8D96A5",
                        paddingLeft: "5px",
                      }}
                    >
                      following
                    </span>
                  </Box>
                </HStack>
                <Divider variant="solid" border="0.2" w="full" />
                <ReactionPanel
                  postId={postId}
                  userReaction={userReaction}
                  // isOpenComment={isOpenComment}
                  // onToggleComment={onToggleComment}
                />
                <Divider border="0.2" w="full" />
                <Box px="4" py="1">
                  <Menu>
                    <MenuButton
                      px={4}
                      py={2}
                      transition="all 0.2s"
                      borderRadius="md"
                      borderWidth="1px"
                      _hover={{}}
                      _expanded={{ borderColor: "black" }}
                    >
                      <HStack>
                        <span style={{ fontSize: "14px" }}>Top Comments</span> <ChevronDownIcon size="14px" />
                      </HStack>
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Latest</MenuItem>
                      <MenuItem>2 Month ago</MenuItem>
                      <MenuDivider />
                    </MenuList>
                  </Menu>
                </Box>
                {/* <Box px="4" py="0">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box boxSize="30px">
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
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#171717",
                          fontWeight: "600",
                          lineHeight: "13px",
                        }}
                      >
                        Hardik Beniwal
                      </p>
                      <HStack fontSize="12px" color="#636363">
                        <p>Master Level</p> <Dot color="#8D96A5" /> <span>28m</span>
                      </HStack>
                    </Box>
                  </Box>
                  <Text fontSize="14px" pl="9" lineHeight="20px" py="10px" textAlign="justify">
                    Yes, you can! But you need to be in 99.5%iler. I was also in such a situation earlier this year. If
                    I had known this, than I wouldn’t have grinded this if it weren’t for Banking exam. Moreover, If
                    anyone is interested, feel free to go through my courses. You’ll like it :)
                  </Text>
                  <HStack align="center" ml="9" fontWeight="500" fontSize="12px" py="2">
                    <Text>Like</Text>
                    <Dot color="#8D96A5" />
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <EmojiGroup />
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          color: "#455564",
                        }}
                      >
                        12
                      </span>
                    </Box>
                    <Stack direction="row" h="12px">
                      <Divider border="0.2" orientation="vertical" />
                    </Stack>
                    <Text fontSize="12px" color="#455564">
                      Reply
                    </Text>
                    <Dot color="#8D96A5" />
                    <Box>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          color: "#455564",
                        }}
                      >
                        13
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#8D96A5",
                          paddingLeft: "5px",
                        }}
                      >
                        comments
                      </span>
                    </Box>
                  </HStack>
                </Box> */}
                <CommentSlider topComments={topComments} postId={postId} />
                <Box px="4" pt="8">
                  <InputGroup>
                    {/* eslint-disable-next-line */}
                    <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                      <Box boxSize="30px">
                        <Image
                          objectFit="cover"
                          width="100%"
                          height="100%"
                          className="rounded-md"
                          src="/profile.jpeg"
                          alt="Profile Image"
                        />
                      </Box>
                    </InputLeftElement>
                    <Input placeholder="" />
                    <InputRightElement pr="1" color="#16222C" bg="" w="100px">
                      <Button variant="unstyled">
                        <ThumbsUp />
                      </Button>
                      <Button variant="unstyled" fontSize="14px" lineHeight="12px" fontWeight="400">
                        Post
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Stack>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PostDetailsView;
