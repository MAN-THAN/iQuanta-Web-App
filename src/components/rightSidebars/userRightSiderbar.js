import { Stack } from "@chakra-ui/react";
import FeatureCardSide from "../feature/featureCardSide";
import { usePathname } from "next/navigation";
import NewsListCard from "../news/newsListCard";
import DiscussionCard from "../feature/discussionCard";

const UserRightSiderbar = () => {
  const path = usePathname();

  return (
    <>
      <Stack>
        {path == "/learn/examDetails/subTopics/0" ? <DiscussionCard /> : <FeatureCardSide />}
        {path == "/learn/examDetails/0" ? <NewsListCard /> : ""}
      </Stack>
    </>
  );
};

export default UserRightSiderbar;
