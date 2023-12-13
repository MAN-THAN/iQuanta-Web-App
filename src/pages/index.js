import HomeChatModal from "@/components/chatSection/homeChatModal";
import FeedTabsSection from "@/components/home/feedTabsSection";
import GroupSection from "@/components/home/groupSection";
import Pagination from "@/components/home/pageinationSection";
import UpcomingSection from "@/components/home/upcomingSection";
import HomeLayout from "@/components/layouts/feedsLayout";
import { useEffect } from "react";
import GetLocationAndDeviceInfo from "@/components/geoLocation&deviceInfo";

const Home = () => {
  return (
    <div>
      <GetLocationAndDeviceInfo />
      <UpcomingSection />
      <GroupSection />
      <Pagination />
      <FeedTabsSection />
      <HomeChatModal />
    </div>
  );
};
Home.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Home;
