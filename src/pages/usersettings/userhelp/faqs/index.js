import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import UserSettingLayout from "@/components/layouts/userSettingLayout";

const FAQs = () => {
  const router = useRouter();
  return (
    <UserSettingLayout>
      <Box>
        <Card>
          <CardHeader>
            <HStack>
              <Box onClick={() => router.back()}>
                {" "}
                <ArrowLeft />
              </Box>
              <Text fontSize="18px" fontWeight="600">
                FAQs
              </Text>
            </HStack>
          </CardHeader>
          <CardBody>
            <Accordion defaultIndex={[0]} allowMultiple>
              {[...Array(10)].map((data, index) => (
                <AccordionItem key={index}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" p="2" fontWeight="500" fontSize="14px" color="#171717">
                        Q1. What is iQuanta?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontWeight="400" fontSize="14px" color="#455564">
                    iQuanta is an organization for preparation of Competitive Exams specializing in MBA entrance exam
                    and CAT entrance exam. It spurred arevolution in the industry by disrupting online learning with
                    Facebook as a platform. iQuanta is associated with prestigious faculty and provides the USP of
                    solving an aspirant’s queries 24*7. It was founded by Indrajeet Singh and today marks as the best
                    online coaching for CAT.
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </CardBody>
        </Card>
      </Box>
    </UserSettingLayout>
  );
};

export default FAQs;
