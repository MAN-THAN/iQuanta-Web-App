import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  ArrowLeft,
  CaseSensitive,
  ChevronRightIcon,
  ClipboardList,
} from "lucide-react";
import PracticeQuestionsSwiper from "@/components/practices/practiceQuestionsSwiper";
import VideoComponent from "@/components/common/videoComponent";
import { useEffect } from "react";
import RootLayout from "@/components/layouts/layout";
import SubTopicLayout from "@/components/layouts/subTopicLayout";

const SunTopicDetails = () => {
  return (
    <Box bg="#fff" p="6" rounded="2xl">
      <Flex alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap="3">
          <ArrowLeft />
          <Stack gap="0">
            <Text fontSize="16px" fontWeight="600">
              Grammar
            </Text>
            <Breadcrumb
              spacing="8px"
              fontSize="sm"
              color="gray"
              separator={<ChevronRightIcon size="16px" color="gray" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">About</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Contact</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Stack>
        </Box>
        <HStack>
          <ClipboardList />
          <CaseSensitive />
        </HStack>
      </Flex>
      <Box pt="4">
        <Text>
          There are two writing tasks you'll have to conquer on the GRE to get
          the score you deserve: the argument essay and the issue essay. We
          won't be going over the broad view in this article, but instead will
          concentrate on some of the finer details.
        </Text>
        <div className="pt-2">
          {/* <Image width='full' src='/subTopic.png' /> */}
          <VideoComponent />
        </div>
        <Text pt="4">
          There are two writing tasks you'll have to conquer on the GRE to get
          the score you deserve: the argument essay and the issue essay. We
          won't be going over the broad view in this article, but instead will
          concentrate on some of the finer details.
        </Text>
        <br />
        <Text>
          {" "}
          Both essays are graded holistically, meaning, "based on an overall
          impression." This means that you'll be judged not only on your
          reasoning, but also on how you write (the basics: putting sentences
          together, using the correct words and punctuating properly).
        </Text>
      </Box>
      <Box>
        <PracticeQuestionsSwiper />
      </Box>
    </Box>
  );
};

SunTopicDetails.getLayout = (page) => <SubTopicLayout>{page}</SubTopicLayout>;

export default SunTopicDetails;
