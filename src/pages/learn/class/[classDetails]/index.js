import LiveClassTimer from "@/components/learn/class/liveClassTimer";
import { useParams, useRouter } from "next/navigation";
import ImagePostCard from "@/components/postCards/imagePostCard";
import TextCardPostCard from "@/components/postCards/textCardPostCard";
import QuizPostCard1 from "@/components/postCards/quizPostCard1";
import QuizPostCard2 from "@/components/postCards/quizPostCard2";
import TextPostCard from "@/components/postCards/textPostCard";
import RootLayout from "@/components/layouts/layout";
import LearnLayout from "@/components/layouts/learnLayout";

const ClassDetails = () => {
  const classDuration = 100;
  const router = useRouter();
//   const { classDetails } = useParams();
//   const [_id, route] = classDetails;
const _id = 1;
  return (
    <LearnLayout>
      <LiveClassTimer classDuration={classDuration} />
      <TextPostCard classId={_id} />
      <ImagePostCard />
      <TextCardPostCard />
      <QuizPostCard1 />
      <QuizPostCard2 />
    </LearnLayout>
  );
};



export default ClassDetails;
