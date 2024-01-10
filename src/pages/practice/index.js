import PracticeLayout from "@/components/layouts/practiceLayout";
import PracticeFeature from "@/components/practice/practiceFeature";
import YourExam from "@/components/exams/yourExam";
import QuizAd from "@/components/practice/quizAd";

const Practice = () => {
  return (
    <PracticeLayout>
      <QuizAd />
      <PracticeFeature />
      <YourExam />
    </PracticeLayout>
  );
};

export default Practice;
