import HomeChatModal from "@/components/chatSection/homeChatModal";
import FeedTabsSection from "@/components/home/feedTabsSection";
import GroupSection from "@/components/home/groupSection";
import Pagination from "@/components/home/pageinationSection";
import UpcomingSection from "@/components/home/upcomingSection";
import HomeLayout from "@/components/layouts/feedsLayout";

const Home = () => {
  return (
    <div>
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
