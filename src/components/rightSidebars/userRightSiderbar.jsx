import { Box, Stack, Heading, HStack, Flex } from '@chakra-ui/react'
import FeatureCardSide from '../feature/featureCardSide'
import { usePathname } from 'next/navigation'


const UserRightSiderbar = () => {
  const path = usePathname();

  return (
    <>
      <Stack >
         <FeatureCardSide />
      </Stack>
    </>

  )
}

export default UserRightSiderbar