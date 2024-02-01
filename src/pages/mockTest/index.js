import YourExam from "@/components/exams/yourExam";
import HomeLayout from "@/components/layouts/feedsLayout";
import MockTestDetail from "@/components/mockTest/mockTestDetail";
import UpcomingTestList from "@/components/mockTest/upcomingTestList";
import RecentPerformance from "@/components/practice/practiceTimeQuiz/recentPerformance";
import React from "react";

const Index = () => {
  return (
    <>
      <HomeLayout>
        <MockTestDetail />
        <YourExam />
        <UpcomingTestList />
        <RecentPerformance/>
      </HomeLayout>
    </>
  );
};

export default Index;
