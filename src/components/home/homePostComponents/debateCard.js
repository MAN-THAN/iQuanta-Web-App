import AvatarGroups from "@/components/common/avatarGroups";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Plus } from "lucide-react";
import React from "react";

const DebateCard = ({handleParticipants}) => {
    
  return (
    <Flex alignItems="center" justifyContent="space-between" px="4">
      <Button bg="transparent" border="1px solid #8D96A5" rounded="lg" p="2" onClick={handleParticipants}>
        <Box display="flex" alignItems="center">
          <Plus size="14px" />
          <Text fontSize="14px">Add Participants</Text>
        </Box>
      </Button>
      <AvatarGroups size='sm' />
    </Flex>
  );
};

export default DebateCard;
