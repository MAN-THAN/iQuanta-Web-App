import { useRouter } from "next/navigation";
import LearnLayout from "@/components/layouts/learnLayout";
import ClassList from "@/components/learn/class/classList";

const Class = () => {
  const router = useRouter();
  return (
    <LearnLayout>
      <ClassList />
    </LearnLayout>
  );
};

export default Class;
