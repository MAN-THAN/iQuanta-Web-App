import PracticeLayout from "@/components/layouts/practiceLayout";
import RecentPerformanceList from "@/components/practice/practiceTimeQuiz/recentPerformance/recentPerformanceList";
import React from "react";

const Index = () => {
  return (
    <PracticeLayout>
      <RecentPerformanceList />
    </PracticeLayout>
  );
};

export default Index;
