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
       <FeatureCardSide />
      </Stack>
    </>
  );
};

export default UserRightSiderbar;
