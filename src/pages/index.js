import ChatMsgSection from "@/components/chatSection/chatMsgSection";
import ChatSection from "@/components/chatSection/chatSection";
import HomeChatModal from "@/components/chatSection/homeChatModal";
import RootLayout from "@/components/layouts/layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { ChevronDown, MessageCircle, SearchIcon } from "lucide-react";

const Home = () => {
  return (
    <div>
      <HomeChatModal/>  
    </div>
  );
};
Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
export default Home;
