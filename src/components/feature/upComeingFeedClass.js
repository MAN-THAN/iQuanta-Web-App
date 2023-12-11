import { Box, Button, Card, CardBody, Flex, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Book, CalendarDays, ChevronRight, Clock3Icon, Dot } from "lucide-react";
import React from "react";

const UpComeingFeedClass = () => {
  return (
    <Box>
      <Card rounded="xl">
        <CardBody>
          <Text color="#000" fontWeight="600">
            Logical Reasoning - CAT 2021
          </Text>
          <Flex fontSize="14px" alignItems="center" pt="2">
            <Text>Ankith Adhyapak</Text>
            <Dot />
            <Text>Session 3/15</Text>
          </Flex>
          <Flex fontSize="14px" alignItems="center" pt="4">
            <Clock3Icon size="14px" />
            <Text>10:00 P.M, Tonight</Text>
          </Flex>
        </CardBody>
        <Box p="4">
          <Button
            width="full"
            variant="solid"
            color="#fff"
            backgroundColor="#000000"
            _hover={{ color: "#000", backgroundColor: "#fff" }}
          >
            View in Calendar
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default UpComeingFeedClass;
