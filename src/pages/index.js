import HomeChatModal from "@/components/chatSection/homeChatModal";
import GroupSection from "@/components/home/groupSection";
import Pagination from "@/components/home/pageinationSection";
import PostFormSection from "@/components/home/postFormSection";
import UpcomingSection from "@/components/home/upcomingSection";
import RootLayout from "@/components/layouts/layout";


const Home = () => {
  return (
    <div>
    <UpcomingSection/> 
    <GroupSection/>
    <Pagination/>
    <PostFormSection/>
      <HomeChatModal/>  
    </div>
  );
};
Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default Home;
