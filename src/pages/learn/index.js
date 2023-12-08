import CoursesAdd from "@/components/courses/courseAdd";
import YourExam from "@/components/exams/yourExam";
import LernLayout from "@/components/layouts/lernLayout";
import MyNotes from "@/components/learnAndClass/myNotes";
import FeatureCardSide from "@/components/feature/featureCardSide";

const LearnClass = () => {
  return (
    <>
      <div>
        <CoursesAdd />
        <FeatureCardSide />
        <YourExam />
        <MyNotes />
      </div>
    </>
  );
};
LearnClass.getLayout = (page) => <LernLayout>{page}</LernLayout>;

export default LearnClass;
