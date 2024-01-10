import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Paperclip } from "lucide-react";
import React from "react";

const FilesTab = () => {
  const pdfs = [
    { id: 1, name: "Document1.pdf", url: "https://example.com/path/to/Document1.pdf", month: "Jun’21" },
    { id: 2, name: "Document2.pdf", url: "https://example.com/path/to/Document2.pdf", month: "Jun’22" },
    { id: 1, name: "Document3.pdf", url: "https://example.com/path/to/Document1.pdf", month: "Jun’23" },
    { id: 1, name: "Document4.pdf", url: "https://example.com/path/to/Document1.pdf", month: "Jun’23" },
  ];

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
  const groupedPdfs = pdfs.reduce((acc, pdf) => {
    if (!acc[pdf.month]) {
      acc[pdf.month] = [];
    }
    acc[pdf.month].push(pdf);
    return acc;
  }, {});

  const sortedMonths = Object.keys(groupedPdfs).sort((a, b) => new Date(b) - new Date(a));

  return (
    <Box bg='white.900' p='4'>
      <Flex fontSize="18px" fontWeight="500" alignItems="center" justifyContent="space-between">
        <Text py="4">All Files</Text>
        <Box>
          <Image alt="icons" src="/FunnelSimple.svg" />
        </Box>
      </Flex>
      <Stack mt="5">
        {sortedMonths.map((month) => (
          <Box key={month}>
            <Text fontSize="18px" fontWeight="500">
              {month}
            </Text>
            {groupedPdfs[month].map((pdf) => (
              <Box
                key={pdf.id}
                cursor="pointer"
                onClick={() => downloadPdf(pdf.url, pdf.name)}
                bg="#F1F2F6"
                mb="3"
                mt="4"
                rounded="2xl"
              >
                <Flex alignItems="center" gap="2" p="4" px="10">
                  <Box>
                    <Paperclip fontSize="14px" />
                  </Box>
                  <Text fontSize="14px" fontWeight="600">
                    {pdf.name}
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
