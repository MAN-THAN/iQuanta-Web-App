import { Box } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <Box onClick={goBack} cursor='pointer'>
        <ArrowLeft />
      </Box>
    </>
  );
};

export default BackButton;
