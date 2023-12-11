import HomeChatModal from "@/components/chatSection/homeChatModal";
import FeedTabsSection from "@/components/home/feedTabsSection";
import GroupSection from "@/components/home/groupSection";
import Pagination from "@/components/home/pageinationSection";
import SuggestionSection from "@/components/home/suggestionSection";
import UpcomingSection from "@/components/home/upcomingSection";
import RootLayout from "@/components/layouts/layout";
import ImagePostCard from "@/components/postCards/imagePostCard";
import PollPostCard from "@/components/postCards/pollPostCard";
import TextCardPostCard from "@/components/postCards/textCardPostCard";
import TextPostCard from "@/components/postCards/textPostCard";


const Home = () => {
  return (
    <div>
    <UpcomingSection/> 
    <GroupSection/>
    <Pagination/>
    <FeedTabsSection/>
    <HomeChatModal/>  
    </div>
  );
};
Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default Home;
