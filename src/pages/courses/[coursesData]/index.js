"use client";
import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Table } from "antd";
import CoursesStory from "@/components/courses/coursesStory";
import { Bookmark, Save } from "lucide-react";
import RootLayout from "@/components/layouts/layout";

const CoursesData = () => {
  const router = useRouter();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Cash Assets",
      className: "column-money",
      dataIndex: "money",
      align: "right",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      money: "￥300,000.00",
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      money: "￥1,256,000.00",
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      money: "￥120,000.00",
      address: "Sydney No. 1 Lake Park",
    },
  ];
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Box p="6" bg="#000" roundedTop="2xl">
        <HStack>
          <Image alt="exam image" src="/exam.png" />
          <Text color="#fff">CAT Full Course 2021</Text>
        </HStack>
      </Box>
      <Box p="6">
        <Stack>
          <Text fontSize="20px" fontWeight="600">
            Crack 2021 With CAT Online Classes
          </Text>
          <Text pt="4" fontSize="14px" fontWeight="400" color="#16222C">
            Be prepared and get exam-ready to face CAT exam with live
            Interactive sessions taken by our faculty from the comfort of your
            home
          </Text>
          <Image alt="thumbnail" width="100%" src="/Thumbnail.png" />
        </Stack>
      </Box>
      <Box p="6">
        <Stack p="0">
          <Text fontSize="20px" fontWeight="600">
            Top Features
          </Text>
          <ul className="list-none">
            {[...Array(4)].map((data, index) => (
              <li key={index} className="pt-4">
                <Box bg="#F4F3FE" p="3" rounded="lg">
                  <HStack align="self-start">
                    <Box
                      width="40px"
                      height="40px"
                      bg="#5146D6"
                      p="2"
                      rounded="xl"
                    >
                      <Image
                        alt="leaderboard"
                        width="100%"
                        objectFit="cover"
                        src="/Leaderboard.svg"
                      />
                    </Box>
                    <Stack pl="3">
                      <Text fontSize="16px" fontWeight="500">
                        Live & Interactive Classes
                      </Text>
                      <Text fontSize="14px" fontWeight="400" color="#455564">
                        Expert Support throughout CAT preparation and further
                        exams. 100+ Live Sessions and 500+ Videos.
                      </Text>
                    </Stack>
                  </HStack>
                </Box>
              </li>
            ))}
          </ul>
        </Stack>
      </Box>
      <Box p="6">
        <Stack>
          <Text fontSize="20px" fontWeight="600">
            What will you learn?
          </Text>
          <Box color="#455564" fontWeight="400" lineHeight="40px" pt="4">
            <p>
              <span style={{ fontWeight: "600" }}>Quants:</span> 40+ Sessions |
              150+ videos | 70+ Assignments
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>LRDI:</span> 30+ Sessions |
              200+ videos | 30+ Assignments
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>VARC:</span> 30+ Sessions |
              150+ videos | 30+ Assignments
            </p>{" "}
            <p>
              <span style={{ fontWeight: "600" }}>Mocks: </span> 15 Full Mocks |
              30 Sectionals | 20
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Non-CAT Mocks:</span>{" "}
              (XAT,SNAP,IIFT,TISS,NMAT)
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Mocks (Bonus):</span> Video
              Solutions For All LRDI Sets in Full Mocks & Assignments.
            </p>
            <p>Inclusive of shortcuts and Past CAT practice papers</p>
            <p>Crash Course Worth ₹12,000 Free Only For Full Course Students</p>
          </Box>
        </Stack>
      </Box>
      <Box p="6">
        <Stack>
          <Text fontSize="20px" fontWeight="600">
            Course Structure
          </Text>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            pagination={false}
          />
        </Stack>
      </Box>

      <Box p="6">
        <Stack>
          <Text fontSize="20px" fontWeight="600">
            Why iQuanta?
          </Text>
          <Box color="#455564" fontWeight="400" lineHeight="40px" pt="4">
            <p>
              A combination of well explained shortcuts, concepts, their
              application in form of videos, pics, texts and unlimited practice.
            </p>
            <p>24x7 doubt clarification from any material.</p>
            Last 2 months free Crash Course including speed based mega events +
            Past CAT papers practice
            <p>Highly Relevant 250 iQuanta Questions</p>
            <p>
              Timing: 10PM to 12 AM | 6 days a week | 2 days Quant,2 Days
              Verbal,2 Days LRDI.
            </p>
          </Box>
        </Stack>
      </Box>
      <Box p="6">
        <CoursesStory />
      </Box>
      <Box p="6" bg="#A4ACB233">
        <HStack shadow="3">
          <Button
            onClick={() => router.push("/payment")}
            width="85%"
            p="6"
            sx={{
              backgroundColor: "#000 !important",
              fontSize: "14px",
              color: "#fff",
            }}
            variant="solid"
            cursor="pointer"
            _hover={{
              bg: "#fff !important ",
              color: "#000",
              border: "1px solid ",
            }}
          >
            Buy Now
          </Button>
          <Stack align="center" m="0 auto">
            <Box alignItems="center" justifyContent="center">
              <Bookmark />
            </Box>
            <Text fontSize="12px" color="#455564" lineHeight="18px">
              Save for later
            </Text>
          </Stack>
        </HStack>
      </Box>
    </div>
  );
};

CoursesData.getLayout = (page) => <RootLayout>{page}</RootLayout>;


export default CoursesData;
