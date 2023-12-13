import CoursesAdd from "@/components/courses/courseAdd";
import YourExam from "@/components/exams/yourExam";
import LearnLayout from "@/components/layouts/learnLayout";
import MyNotes from "@/components/learnAndClass/myNotes";

const LearnClass = () => {
  return (
    <>
      <LearnLayout>
        <CoursesAdd />
        <YourExam />
        <MyNotes />
      </LearnLayout>
    </>
  );
};

export default LearnClass;
