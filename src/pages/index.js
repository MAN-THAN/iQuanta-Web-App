import HomeChatModal from "@/components/chatSection/homeChatModal";
import FeedTabsSection from "@/components/home/feedTabsSection";
import GroupSection from "@/components/home/groupSection";
import EventSection from "@/components/home/eventSection";
import HomeLayout from "@/components/layouts/feedsLayout";
import GetLocationAndDeviceInfo from "@/components/geoLocation&deviceInfo";
import StudyPartnerSection from "@/components/home/studyPartnerSection";

const Home = () => {
  return (
    <HomeLayout>
      <GetLocationAndDeviceInfo />
      <EventSection />
      <GroupSection />
      <StudyPartnerSection />
      <FeedTabsSection />
      <HomeChatModal />
    </HomeLayout>
  );
};

export default Home;
