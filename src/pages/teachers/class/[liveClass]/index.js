import LiveClassTimer from "@/components/learnAndClass/liveClassTimer";
import { useParams, useRouter } from "next/navigation";
import ImagePostCard from "@/components/postCards/imagePostCard";
import TextCardPostCard from "@/components/postCards/textCardPostCard";
import QuizPostCard1 from "@/components/postCards/quizPostCard1";
import QuizPostCard2 from "@/components/postCards/quizPostCard2";
import TextPostCard from "@/components/postCards/textPostCard";
import RootLayout from "@/components/layouts/layout";
import TeacherLayout from "@/components/layouts/teacherLayout";

const TeacherLiveClass = () => {
  const classDuration = 1800;
  const router = useRouter();
  //   const { classDetails } = useParams();
  //   const [_id, route] = classDetails;
  const _id = 1;
  return (
    <TeacherLayout>
      <LiveClassTimer classDuration={classDuration} />
      <TextPostCard classId={_id} />
      <ImagePostCard />
      <TextCardPostCard />
      <QuizPostCard1 />
      <QuizPostCard2 />
    </TeacherLayout>
  );
};

export default TeacherLiveClass;
