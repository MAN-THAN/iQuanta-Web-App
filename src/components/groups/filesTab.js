import {
  Box,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ListFilter, Paperclip } from "lucide-react";
import React,{useState} from "react";
import { useQuery } from "react-query";
import { getGroupDocPostList } from "@/api/feed/groups/post";
import moment from "moment";
  // const pdfs = [
  //   { id: 1, name: "Document1.pdf", url: "https://example.com/path/to/Document1.pdf", month: "Jun’21" },
  //   { id: 2, name: "Document2.pdf", url: "https://example.com/path/to/Document2.pdf", month: "Jun’22" },
  //   { id: 1, name: "Document3.pdf", url: "https://example.com/path/to/Document1.pdf", month: "Jun’23" },
  //   { id: 1, name: "Document4.pdf", url: "https://example.com/path/to/Document1.pdf", month: "Jun’23" },
  // ];
const FilesTab = ({groupId}) => {
  const [state, setState] = useState([]);
const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
        queryKey: ["getGroupDocList", groupId],   
        queryFn: () => getGroupDocPostList(groupId),
        onError: (error, variables, context) =>
          toast.error(`${error?.response?.data?.error?.message || "some error"}`, {
            position: toast.POSITION.TOP_RIGHT,
          }),
        onSuccess: (res) => setState(res.data.data.groupPost),
      });

      console.log("doc list:",state);
  const downloadPdf = (pdfUrl, pdfName) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = pdfName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Group PDFs by month
  // const groupedPdfs = pdfs.reduce((acc, pdf) => {
  //   if (!acc[pdf.month]) {
  //     acc[pdf.month] = [];
  //   }
  //   acc[pdf.month].push(pdf);
  //   return acc;
  // }, {});

  //const sortedMonths = Object.keys(groupedPdfs).sort((a, b) => new Date(b) - new Date(a));

  return (
    <Box bg="white.900" p="4">
      <Flex fontSize="18px" fontWeight="500" alignItems="center" justifyContent="space-between">
        <Text py="4">All Files</Text>
        <Box>
          <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<ListFilter />} variant="outline" />
            <MenuList>
              <MenuItem>
                <Stack>
                  <Text fontSize="16px">Search By Date </Text>
                  <Radio size="md" name="1" colorScheme="red">
                    22/01/2024
                  </Radio>
                </Stack>
              </MenuItem>
            </MenuList>
          </Menu>
          {/* <Image alt="icons" src="/FunnelSimple.svg" /> */}
        </Box>
      </Flex>
      <Stack mt="5">
        {state.map((date,i) => (
          <Box key={i}>
            <Text fontSize="18px" fontWeight="500">
              
              {moment(date.createdAt).format('LL')}
            </Text>
            {date.media.map((pdf,i) => (
              
              <Box
                key={i}
                cursor="pointer"
                onClick={() => downloadPdf(pdf, pdf.split('/',5)[4])}
                bg="#F1F2F6"
                mb="3"
                mt="4"
                rounded="2xl"
              >
                
                <Flex alignItems="center" gap="2" p="4" px="10">
                  <Box cursor="pointer">
                    <Paperclip fontSize="14px" />
                  </Box>
                  <Text fontSize="14px" fontWeight="600">
                  {pdf.split('/',5)[4]}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default FilesTab;
