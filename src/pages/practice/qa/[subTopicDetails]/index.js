import PracticeLayout from "@/components/layouts/practiceLayout";
import MyNotes from "@/components/learn/myNotes";
import PracticeSubTopic from "@/components/practice/practiceSubTopic";

const index = () => {
  return (
    <PracticeLayout>
      <PracticeSubTopic />
      <MyNotes/>
    </PracticeLayout>
  );
};

export default index;
