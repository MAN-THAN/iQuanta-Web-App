// import React, { useState } from "react";
// import { Box, Collapse, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
// import { ArrowRight } from "lucide-react";
// import FeaturedCoursesCraousel from "./groupExams/featuredCoursesCraousel";
// import ImportantNewsCraousel from "./groupExams/importantNewsCraousel";
// import { useRouter } from "next/navigation";
// import { hoverEffect } from "@/utilities/commonFunctions";

// const ExamTab = () => {
//   const [sections, setSections] = useState([
//     { name: "Eligibility", isOpen: false, content: <Text>Eligibility </Text>, status: "false", color: "#5146D6" },
//     { name: "Exam Dates", isOpen: false, content: <Text>Exam Dates </Text>, status: "false", color: "#5146D6" },
//     {
//       name: "Preparation Tips",
//       isOpen: false,
//       content: <Text>Preparation Tips </Text>,
//       status: "false",
//       color: "#5146D6",
//     },
//     {
//       name: "Scoring Syllabus",
//       isOpen: false,
//       content: <Text>Scoring Syllabus</Text>,
//       status: "false",
//       color: "#5146D6",
//     },
//   ]);

//   const activeBoxColor = "#5146D6"; // Customize the red color here
//   const inactiveBoxColor = "#F1F2F6";

//   const handleToggle = (clickedSection) => {
//     const updatedSections = sections.map((section) => ({
//       ...section,
//       isOpen: section.name === clickedSection ? !section.isOpen : false,
//       color: section.name === clickedSection ? activeBoxColor : inactiveBoxColor,
//     }));

//     setSections(updatedSections);
//   };

//   return (
//     <Box bg="white.900" p="4" mt="1">
//       <Text py="2">
//         Get admission into a graduate management program, such as MBA and Masters in Finance-related courses in top
//         business schools across the world.
//       </Text>
//       <Box display="flex" justifyContent="space-between" flexWrap="wrap">
//         {sections.map((section) => (
//           <Box
//             onClick={() => handleToggle(section.name)}
//             display="flex"
//             key={section.name}
//             justifyContent="space-between"
//             alignItems="center"
//             bg={section.isOpen ? activeBoxColor : inactiveBoxColor}
//             p="3"
//             mt="4"
//             rounded="2xl"
//             width={{ sm: "100%", lg: "20%", md: "100%" }}
//             minW="300px"
//             color={section.isOpen ? "white.900" : "#000"}
//             // sx={{
//             //   ...hoverEffect,
//             //   '&:hover': {
//             //     backgroundPosition: 'left bottom',
//             //     color: 'white.900',
//             //   },
//             // }}
//           >
//             <HStack align="center">
//               <Box width="32px" height="32px" bg="#5146D6" p="2" rounded="lg">
//                 <Image alt="image" width="100%" objectFit="cover" src="/CircleWavyCheck.svg" />
//               </Box>
//               <Text fontSize="14px" fontWeight="500" p="0">
//                 {section.name}
//               </Text>
//             </HStack>
//             <Box>
//               <ArrowRight fontSize="14px" />
//             </Box>
//           </Box>
//         ))}
//       </Box>
//       {sections.map((section) => (
//         <Collapse key={section.name} in={section.isOpen} animateOpacity>
//           <Box p="40px" color="white" mt="4" bg={activeBoxColor} rounded="md" shadow="md">
//             {section.content}
//           </Box>
//         </Collapse>
//       ))}
//       <FeaturedCoursesCraousel />
//       <ImportantNewsCraousel />
//     </Box>
//   );
// };

// export default ExamTab;

import React, { useState } from "react";
import { Box, Text, HStack, Image } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import FeaturedCoursesCraousel from "./groupExams/featuredCoursesCraousel";
import ImportantNewsCraousel from "./groupExams/importantNewsCraousel";
import ExamTabDetails from "../practice/examTabDetails";

export const examTabDatas = [
  { name: "Eligibility", isOpen: false, status: "false", color: "#5146D6" },
  { name: "ExamDates", isOpen: false, status: "false", color: "#5146D6" },
  { name: "PreparationTips", isOpen: false, status: "false", color: "#5146D6" },
  { name: "ScoringSyllabus", isOpen: false, status: "false", color: "#5146D6" },
];

const ComponentForIndex = ({ index }) => {
  const components = [
    <Box key={1}>Component for Index 0</Box>,
    <Box key={2}>
      <ExamTabDetails />
    </Box>,
    <Box key={3}>Component for Index 2</Box>,
    <Box key={4}>Component for Index 3</Box>,
  ];

  return components[index];
};

const ExamTab = () => {
  const [examTabDatasState, setExamTabDatasState] = useState(examTabDatas);
  const [currentTabData, setCurrentTabData] = useState({});
  const handleToggle = (clickedIndex) => {
    const updatedExamTabDatas = examTabDatasState.map((data, index) => ({
      ...data,
      isOpen: index === clickedIndex ? !data.isOpen : false,
      status: index === clickedIndex ? "true" : "false",
    }));
    setCurrentTabData(examTabDatasState[clickedIndex]);
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
        Get admission into a graduate management program, such as MBA and Masters in Finance-related courses in top
        business schools across the world.
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
            <Box width="32px" height="32px" bg="" p="2" rounded="lg">
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
      {examTabDatasState.map(
        (data, index) => data.status === "true" && <ComponentForIndex key={index} index={index} />
      )}
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {examTabDatasState.map(
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
