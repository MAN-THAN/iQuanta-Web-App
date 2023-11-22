'use client'
import { Box, Stack, Heading, HStack, Flex } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import FeatureCardSide from '../feature/featureCardSide'
import UpComeingCard from '../feature/upComeingCard'
import { usePathname } from 'next/navigation'
import { CalendarDays, ChevronRight } from 'lucide-react'
import NewsListCard from '../news/newsListCard'
import DiscussionCard from '../feature/discussionCard'
import { useRouter } from 'next/router'
import CourseCards from '../courses/courseCards'



const UserRightSiderbar = () => {
  const path = usePathname();

  return (
    <>
      <Stack >
        
        {path == '/learn/examDetails/subTopics/0' ? <DiscussionCard /> : <FeatureCardSide />}
        {path == "/learn/examDetails/0" ? <NewsListCard /> : ""}
      </Stack>
    </>

  )
}

export default UserRightSiderbar