import GroupsLayout from "@/components/layouts/groupsLayout";
import { Box } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import React from "react";

const EligibilityAndFees = () => {
  return (
    <GroupsLayout>
      <Box>
        <Box>
          <ArrowLeft />
        </Box>
      </Box>
    </GroupsLayout>
  );
};

export default EligibilityAndFees;
