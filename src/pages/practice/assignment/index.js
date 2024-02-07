import AllTopicListTabs from "@/components/common/allTopicListTabs";
import PreparationTips from "@/components/exams/preparationTips";
import PracticeLayout from "@/components/layouts/practiceLayout";
import AssignmentsTopicList from "@/components/practice/assignments/assignmentTopicList";
import React from "react";

const Index = () => {
  return (
    <PracticeLayout>
      {/* <AssignmentsTopicList/> */}
      <AllTopicListTabs pageTitle={"Assignments"} path={"/practice/assignment"}  />
      <PreparationTips />
    </PracticeLayout>
  );
};

export default Index;
