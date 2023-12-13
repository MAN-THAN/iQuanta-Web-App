import HomeChatModal from "@/components/chatSection/homeChatModal";
import FeedTabsSection from "@/components/home/feedTabsSection";
import GroupSection from "@/components/home/groupSection";
import Pagination from "@/components/home/pageinationSection";
import UpcomingSection from "@/components/home/upcomingSection";
import HomeLayout from "@/components/layouts/feedsLayout";
import GetLocationAndDeviceInfo from "@/components/geoLocation&deviceInfo";

const Home = () => {
  return (
    <HomeLayout>
      <GetLocationAndDeviceInfo />
      <UpcomingSection />
      <GroupSection />
      <Pagination />
      <FeedTabsSection />
      <HomeChatModal />
    </HomeLayout>
  );
};

export default Home;
