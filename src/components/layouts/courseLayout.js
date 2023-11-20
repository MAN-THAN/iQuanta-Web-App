import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Flex } from '@chakra-ui/react'
import MainHeader from '../mainHeader';
import Leftsidebar from '../leftSidebar/sidebar';
import UserRightSiderbar from '../rightSidebars/userRightSiderbar';


const ActiveMenuLink = ({ children, href }) => {
    const pathname = usePathname();
    const active = href === pathname;
  
    return (
      <Link
        href={href}
        className={`hover:bg-gray-100 p-2 rounded block text-sm ${
          active ? 'text-black font-semibold' : 'text-gray-500'
        }`}
      >
        {children}
      </Link>
    );
  };


const CourseLayout = ({children}) => {
  return (
    <Flex height="100vh" flexDirection="column" margin={{ md: "0 1%", lg: "0 8%", sm: "0" }}>
    <MainHeader />
    <Flex p="4">
        <Leftsidebar />
        <Box overflow='hidden' flex='1' pl='4%' pr='4%'>
            {children}
        </Box>
        <UserRightSiderbar />
    </Flex>
</Flex>
  )
}

export default CourseLayout