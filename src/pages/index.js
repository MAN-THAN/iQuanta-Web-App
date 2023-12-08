import HomeChatModal from "@/components/chatSection/homeChatModal";
import UpcomingSection from "@/components/home/upcomingSection";
import RootLayout from "@/components/layouts/layout";


const Home = () => {
  return (
    <div>
    <UpcomingSection/> 
      <HomeChatModal/>  
    </div>
  );
};
Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default Home;
