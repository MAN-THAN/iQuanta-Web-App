import MockTestQuizLayout from "@/components/layouts/mockTestQuizLayout";
import Template1 from "@/components/practice/pastPapers/templates/template1";
import SolutionFullScreen from "@/components/practice/practiceSolution/solutionFullScreen";

const PastPapers = () => {
  return (
    <MockTestQuizLayout>
      <Template1 />
      {/* <SolutionFullScreen/> */}
    </MockTestQuizLayout>
  );
};

export default PastPapers;
