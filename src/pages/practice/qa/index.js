import AllTopicListTabs from "@/components/common/allTopicListTabs";
import PreparationTips from "@/components/exams/preparationTips";
import PracticeLayout from "@/components/layouts/practiceLayout";
import PracticeQa from "@/components/practice/practiceQa";

const Qa = () => {
  return (
    <PracticeLayout>
      <AllTopicListTabs pageTitle={"Practice Q&As"} path={"/practice/qa"} />
      <PreparationTips />
    </PracticeLayout>
  );
};

export default Qa;
