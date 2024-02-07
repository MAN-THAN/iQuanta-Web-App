import AllTopicListTabs from "@/components/common/allTopicListTabs";
import PreparationTips from "@/components/exams/preparationTips";
import PracticeLayout from "@/components/layouts/practiceLayout";

const Index = () => {
  return (
    <PracticeLayout>
      <AllTopicListTabs pageTitle={"Time Quiz"} path={"/practice/qa"}/>
      <PreparationTips/>
    </PracticeLayout>
  );
};

export default Index;
