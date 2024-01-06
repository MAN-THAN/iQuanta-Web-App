import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getFaq } from "@/api/profile/profileSettings";
import { useQuery } from "react-query";
import { useState } from "react";
import { useSelector } from "react-redux";

const FAQs = () => {
  const router = useRouter();
  const [state, setState] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
    queryKey: ["getFaq", uid],
    queryFn: () => getFaq(uid),
    onError: (error, variables, context) =>
      toast.error(`${error?.response?.data.error?.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res) => setState(res?.data.data.faq),
  });
  console.log(state);
  return (
    <Box>
      <Card>
        <CardHeader>
          <HStack>
            <Box onClick={() => router.back()}>
              {" "}
              <ArrowLeft />
            </Box>
            <Text fontSize="18px" fontWeight="600">
              FAQs
            </Text>
          </HStack>
        </CardHeader>
        <CardBody>
          <Accordion defaultIndex={[0]} allowMultiple>
            {state?.map((item, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" p="2" fontWeight="500" fontSize="14px" color="#171717">
                      {item?.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontWeight="400" fontSize="14px" color="#455564">
                  {item?.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Box>
  );
};

export default FAQs;
