import CoursesAdd from "@/components/courses/courseAdd";
import YourExam from "@/components/exams/yourExam";
import RootLayout from "@/components/layouts/layout";
import MyNotes from "@/components/learnAndClass/myNotes";

const LearnClass = () => {
  return (
    <>
      <div>
        <CoursesAdd />
        <YourExam />
        <MyNotes />
      </div>
    </>
  );
};
LearnClass.getLayout = (page) => (
    <RootLayout>
      {page}
    </RootLayout>
  );
  

export default LearnClass;
