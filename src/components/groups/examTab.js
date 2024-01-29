import React, { useState } from "react";
import { Box, Text, HStack, Image } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import FeaturedCoursesCraousel from "./groupExams/featuredCoursesCraousel";
import ImportantNewsCraousel from "./groupExams/importantNewsCraousel";
import ExamTabDetails from "./tabsDetails/examDateTabDetails";
import PreparationTipsDetails from "./tabsDetails/preparationTips";
import CollegeList from "./tabsDetails/collegeList";
import { getGroupExamDetail } from "@/api/feed/groups/exam";
import { useQuery } from "react-query";
import { ToastContainer, toast } from "react-toastify";
export const examTabDatas = [
  { name: "Eligibility", isOpen: false, status: "false", color: "#5146D6" },
  { name: "Exam Dates", isOpen: false, status: "false", color: "#5146D6" },
  { name: "Preparation Tips", isOpen: false, status: "false", color: "#5146D6" },
  { name: "Scoring Syllabus", isOpen: false, status: "false", color: "#5146D6" },
  { name: "Top College List", isOpen: false, status: "false", color: "#5146D6" },
];

const ComponentForIndex = ({ index,data }) => {
  const components = [
    <Box key={1}>{data}</Box>,
    <Box key={2}>
      <ExamTabDetails data={data} />
    </Box>,
    <Box key={3}>
      <PreparationTipsDetails data={data} />
    </Box>,
    <Box key={4}>{data}</Box>,
    <Box key={5}>
      <CollegeList data={data} />
    </Box>,
  ];

  return components[index];
};

const ExamTab = ({examId}) => {
  
  const [examTabDatasState, setExamTabDatasState] = useState(examTabDatas);
  const [currentTabData, setCurrentTabData] = useState({});
  const [state, setState] = useState();
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getGroupExamDetail", examId],
    queryFn: () => getGroupExamDetail(examId),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data?.error?.message || "some error"}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res.data.data.specificationData),
  });
  
  const handleToggle = (clickedIndex) => {
    const updatedExamTabDatas = examTabDatasState?.map((data, index) => ({
      ...data,
      isOpen: index === clickedIndex ? !data.isOpen : false,
      status: index === clickedIndex ? "true" : "false",
    }));
    setCurrentTabData(examTabDatasState[clickedIndex]);
    console.log("6060",currentTabData);
    setExamTabDatasState(updatedExamTabDatas);
  };

  const handleTopTab = () => {
    setCurrentTabData({ name: null, status: "false" });
    const updatedExamTabDatas = examTabDatasState.map((data) => ({ ...data, status: "false" }));
    setExamTabDatasState(updatedExamTabDatas);
  };

  return (
    <Box bg="white.900" p="4" mt="1">
      <Text py="2">
        {state?.title}
      </Text>
      {currentTabData.name == null ? (
        ""
      ) : (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bg="#F1F2F6"
          p="3"
          mt="4"
          rounded="2xl"
          width={{ sm: "100%", lg: "20%", md: "100%" }}
          minW="300px"
          onClick={handleTopTab}
        >
          <HStack align="center">
            <Box width="32px" height="32px" bg="brand.900" p="2" rounded="lg">
              <Image alt="image" width="100%" objectFit="cover" src="/CircleWavyCheck.svg" />
            </Box>
            <Text fontSize="14px" fontWeight="500" p="0">
              {currentTabData.name}
            </Text>
          </HStack>
          <Box>
            <ArrowRight fontSize="14px" />
          </Box>
        </Box>
      )}
      {examTabDatasState?.map(
        (data, index) => data.status === "true" && <ComponentForIndex key={index} index={index} data={index==0?state.eligibility:index==1?state.examDetail:index==2?state.examTips:index==3?state.syllabus:index==4?state.topColleges:null}  />
      )}
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {examTabDatasState?.map(
          (data, i) =>
            data.status === "false" && (
              <Box
                key={data.name}
                onClick={() => handleToggle(i)}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                bg={"#F1F2F6"}
                p="3"
                mt="4"
                rounded="2xl"
                width={{ sm: "100%", lg: "20%", md: "100%" }}
                minW="300px"
              >
                <HStack align="center">
                  <Box width="32px" height="32px" bg={data.color} p="2" rounded="lg">
                    <Image alt="image" width="100%" objectFit="cover" src="/CircleWavyCheck.svg" />
                  </Box>
                  <Text fontSize="14px" fontWeight="500" p="0">
                    {data.name}
                  </Text>
                </HStack>
                <Box>
                  <ArrowRight fontSize="14px" />
                </Box>
              </Box>
            )
        )}
      </Box>

      <FeaturedCoursesCraousel />
      <ImportantNewsCraousel />
    </Box>
  );
};

export default ExamTab;
