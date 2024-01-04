import CoursesAd from "@/components/courses/courseAd";
import YourExam from "@/components/exams/yourExam";
import LearnLayout from "@/components/layouts/learnLayout";
import MyNotes from "@/components/learn/myNotes";

const LearnClass = () => {
  return (
    <LearnLayout>
      <CoursesAd />
      <YourExam />
      <MyNotes />
    </LearnLayout>
  );
};

export default LearnClass;
