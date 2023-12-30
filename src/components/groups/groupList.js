import GroupsLayout from "@/components/layouts/groupsLayout";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const YourGroupsList = () => {
  const router = useRouter();
  return (
    <Box>
      <Card>
        <CardHeader>
          <HStack>
            <Box onClick={() => router.back()}>
              <ArrowLeft />
            </Box>
            <Text fontSize="16px" fontWeight="600">
              Your Groups
            </Text>
          </HStack>
        </CardHeader>
        <CardBody>
          <HStack px="4" pb="4">
            <Image alt="lock icon" src="/Lock.svg" />
            <Text fontWeight="500" fontSize="16px">
              Premium Groups
            </Text>
          </HStack>
          <UnorderedList listStyleType="none">
            {[...Array(4)].map((e, i) => (
              <>
                <ListItem onClick={()=>router.push("/groups/1")} display="flex" alignItems="center" cursor="pointer" justifyContent="space-between" py="4">
                  <HStack>
                    <Image boxSize="40px" alt="exam" src="/exam.png" />
                    <Text fontWeight="500" fontSize="14px">
                      GMAT Full Course 2021
                    </Text>
                  </HStack>
                  <ChevronRight />
                </ListItem>
                <Divider />
              </>
            ))}
          </UnorderedList>
        </CardBody>
      </Card>
      <Card mt='2'>
        <CardBody>
          <HStack px="4" pb="4">
            <Image alt="lock icon" src="/GlobeHemisphereEast.svg" />
            <Text fontWeight="500" fontSize="16px">
              Public Groups
            </Text>
          </HStack>
          <UnorderedList listStyleType="none">
            {[...Array(2)].map((e, i) => (
              <>
                <ListItem display="flex" alignItems="center" cursor="pointer" justifyContent="space-between" py="4">
                  <HStack>
                    <Image boxSize="40px" alt="exam" src="/exam.png" />
                    <Text fontWeight="500" fontSize="14px">
                      GMAT Full Course 2021
                    </Text>
                  </HStack>
                  <ChevronRight />
                </ListItem>
                <Divider />
              </>
            ))}
          </UnorderedList>
        </CardBody>
      </Card>
    </Box>
  );
};

export default YourGroupsList;
