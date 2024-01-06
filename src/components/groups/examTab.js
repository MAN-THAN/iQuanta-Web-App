import React, { useState } from "react";
import { Box, Collapse, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import FeaturedCoursesCraousel from "./groupExams/featuredCoursesCraousel";
import ImportantNewsCraousel from "./groupExams/importantNewsCraousel";
import { useRouter } from "next/navigation";
import { hoverEffect } from "@/utilities/commonFunctions";

const ExamTab = () => {
  const [sections, setSections] = useState([
{ name: "Eligibility", isOpen: false, content: <Text>Eligibility </Text> ,status: "false", color: "#5146D6" },
{ name: "Exam Dates", isOpen: false,  content: <Text>Exam Dates </Text> ,status: "false", color: "#5146D6" },
{ name: "Preparation Tips", isOpen: false, content: <Text>Preparation Tips </Text> , status: "false", color: "#5146D6" },
{ name: "Scoring Syllabus", isOpen: false, content: <Text>Scoring Syllabus</Text> , status: "false", color: "#5146D6" },
  ]);

  const activeBoxColor = "#5146D6"; // Customize the red color here
  const inactiveBoxColor = "#F1F2F6";

  const handleToggle = (clickedSection) => {
    const updatedSections = sections.map((section) => ({
      ...section,
      isOpen: section.name === clickedSection ? !section.isOpen : false,
      color: section.name === clickedSection ? activeBoxColor : inactiveBoxColor,
    }));

    setSections(updatedSections);
  };

  return (
    <Box bg="white.900" p="4" mt="1">
      <Text py="2">
        Get admission into a graduate management program, such as MBA and Masters in Finance-related courses in top
        business schools across the world.
      </Text>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {sections.map((section) => (
          <Box
            onClick={() => handleToggle(section.name)}
            display="flex"
            key={section.name}
            justifyContent="space-between"
            alignItems="center"
            bg={section.isOpen ? activeBoxColor : inactiveBoxColor}
            p="3"
            mt="4"
            rounded="2xl"
            width={{ sm: "100%", lg: "20%", md: "100%" }}
            minW="300px"
            color={section.isOpen ? "white.900" : "#000"}
            // sx={{
            //   ...hoverEffect,
            //   '&:hover': {
            //     backgroundPosition: 'left bottom',
            //     color: 'white.900',
            //   },
            // }}
          >
            <HStack align="center">
              <Box width="32px" height="32px" bg="#5146D6" p="2" rounded="lg">
                <Image alt="image" width="100%" objectFit="cover" src="/CircleWavyCheck.svg" />
              </Box>
              <Text fontSize="14px" fontWeight="500" p="0">
                {section.name}
              </Text>
            </HStack>
            <Box>
              <ArrowRight fontSize="14px" />
            </Box>
          </Box>
        ))}
      </Box>
      {sections.map((section) => (
        <Collapse key={section.name} in={section.isOpen} animateOpacity>
          <Box p="40px" color="white" mt="4" bg={activeBoxColor} rounded="md" shadow="md">
            { section.content }
          </Box>
        </Collapse>
      ))}
      <FeaturedCoursesCraousel />
      <ImportantNewsCraousel />
    </Box>
  );
};

export default ExamTab;

// import React, { useState } from "react";
// import { Box, Collapse, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
// import { ArrowRight } from "lucide-react";
// import FeaturedCoursesCraousel from "./groupExams/featuredCoursesCraousel";
// import ImportantNewsCraousel from "./groupExams/importantNewsCraousel";
// import { useRouter } from "next/navigation";
// import { hoverEffect } from "@/utilities/commonFunctions";
// import { examTabDatas } from "@/utilities/comanData";

// const ExamTab = () => {
 
//   const [secti̵on,setSections] = useState(false)
//   console.log("🚀 ~ file: examTab.js:100 ~ ExamTab ~ secti̵on:", secti̵on)

//   return (
//     <Box bg="white.900" p="4" mt="1">
//       <Text py="2">
//         Get admission into a graduate management program, such as MBA and Masters in Finance-related courses in top
//         business schools across the world.
//       </Text>
      
//        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
//         {examTabDatas.map((data, i) => (
//           <Box
//             key={data.name}
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             bg="#F1F2F6"
//             p="3"
//             mt="4"
//             rounded="2xl"
//             width={{ sm: "100%", lg: "20%", md: "100%" }}
//             minW="300px"
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
//                 {data.name}
//               </Text>
//             </HStack>
//             <Box>
//               <ArrowRight fontSize="14px" />
//             </Box>
//           </Box>
//         ))}
//       </Box>
//       <Box>

//       </Box>
//       <FeaturedCoursesCraousel />
//       <ImportantNewsCraousel />
//     </Box>
//   );
// };

// export default ExamTab;
