import { checkType } from "@/utilities/commonFunctions";
import { Box, Button, Card, Grid, GridItem, HStack, IconButton, Image, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import SubmitMockModal from "./submitMockModal";
import SubmitConfirmationModal from "./submitConfirmationModal";
import SubmitLoaderModal from "./submitLoaderModal";

const QustionPalette = ({ questionsData, onQuestionChange }) => {
  const { isOpen: isOpenSubmitModal, onOpen: onOpenSubmitModal, onClose: onCloseSubmitModal } = useDisclosure();

  return (
    <>
      {/* <SubmitMockModal isOpen={isOpenSubmitModal} onClose={onCloseSubmitModal} /> */}
      {/* <SubmitConfirmationModal isOpen={isOpenSubmitModal} onClose={onCloseSubmitModal} /> */}
      <SubmitLoaderModal isOpen={isOpenSubmitModal} onClose={onCloseSubmitModal}/>
      <Box textAlign="center" px="10">
        <Text pt="6" fontSize="14px">
          You are viewing <strong>Verbal Ability</strong> section
        </Text>
        <Text fontWeight={800} pt="3">
          QUESTION PALETTE
        </Text>
        <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="6">
          {questionsData.map((_, index) => (
            <GridItem key={index} boxSize="50px" rounded="2xl" h="10">
              <IconButton
                key={index}
                cursor="pointer"
                bg={checkType(index).color}
                clipPath={checkType(index).clipPath}
                color="black.900"
                aria-label="Call Segun"
                size="lg"
                boxShadow="xl"
                className={checkType(1)?.type.toLowerCase() === "not answered" ? "pentagon" : ""}
                onClick={() => onQuestionChange(index)}
                icon={<Text>{index + 1}</Text>}
              />
            </GridItem>
          ))}
        </Grid>
        <Box pt="16%">
          <HStack align="center" justifyContent="space-between">
            <Button
              size="md"
              rounded="2xl"
              width="100%"
              bg="brand.900"
              sx={{
                color: "#fff",
                fontSize: "12px",
              }}
              variant="solid"
            >
              Question Paper
            </Button>
            <Button
              size="md"
              width="100%"
              rounded="2xl"
              bg="brand.900"
              sx={{
                color: "#fff",
                fontSize: "12px",
              }}
              variant="solid"
            >
              Instructions
            </Button>
          </HStack>
          <Button
            onClick={onOpenSubmitModal}
            mt="3"
            size="md"
            width="100%"
            rounded="2xl"
            bg="black.800"
            sx={{
              color: "#fff",
              fontSize: "12px",
            }}
            variant="solid"
          >
            Submit
          </Button>
        </Box>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={4}
          px="10"
          bg="white.900"
          mt="6%"
          py="2"
          rounded="3xl"
          fontSize="12px"
          fontWeight="600"
        >
          <GridItem rounded="2xl" h="10" display="flex" alignItems="center" justifyContent="start" width="100%">
            <HStack>
              <Box clipPath="polygon(50% 0%, 100% 38%, 100% 100%, 0 99%, 0% 38%)" boxSize="20px" bg="green" />
              <Text>Answered</Text>
            </HStack>
          </GridItem>
          <GridItem rounded="2xl" h="10" display="flex" alignItems="center" justifyContent="start" width="100%">
            <HStack>
              <Box clipPath="polygon(50% 0%, 100% 38%, 100% 100%, 0 99%, 0% 38%)" boxSize="20px" bg="red" />
              <Text>Not Answered</Text>
            </HStack>
          </GridItem>
          <GridItem rounded="2xl" h="10" display="flex" alignItems="center" justifyContent="start" width="100%">
            <HStack>
              <Box rounded="full" boxSize="20px" bg="brand.900" />
              <Text>Marked</Text>
            </HStack>
          </GridItem>
          <GridItem rounded="2xl" h="10" display="flex" alignItems="center" justifyContent="start" width="100%">
            <HStack>
              <Box rounded="lg" boxSize="20px" boxShadow="2xl" border="1px Solid" bg="white.900" />
              <Text>Not Visited</Text>
            </HStack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default QustionPalette;
