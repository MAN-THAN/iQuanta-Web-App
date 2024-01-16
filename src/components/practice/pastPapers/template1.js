import TextRadio from "@/components/common/textRadio";
import { checkType } from "@/utilities/commonFunctions";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Text,
  useRadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";

const Template1 = () => {
  const tags = ["Verbal Ability", "LRDI", "Quant"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Verbal Ability",
    defaultValue: "All",
    onChange: console.log,
  });
  const group = getRootProps();

  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (index) => {
    setClickedButton(index);
  };

  console.log("🚀 ~ Template1 ~ checkType:", checkType(1))
  return (
    <Box bg="white.900" p="6" h="90vh">
      <Flex>
        <Box flexBasis="75%" px="4">
          <Box>
            <Text fontSize="16px" fontWeight="600">
              Section
            </Text>
            <Flex>
              <HStack {...group}>
                {tags.map((value) => {
                  const radio = getRadioProps({ value });
                  return (
                    <TextRadio key={value} {...radio}>
                      {value}
                    </TextRadio>
                  );
                })}
              </HStack>
              <HStack flexBasis="40%">
                <Box>
                  <Image src="" />
                </Box>
                <Box>
                  <Image src="" />
                </Box>
              </HStack>
            </Flex>
          </Box>
          <Box bg="brand.800" rounded="3xl" p="6" mt="4">
            <Flex gap="4">
              <Box flexBasis="60%" bg="white.900" p="4" height="60vh" overflowY="scroll" rounded="3xl">
                <Text fontSize="14px" fontWeight="600">
                  DiREctions tor the question
                </Text>
                <p>
                  Read the passage and answer the question based on it. when did America quit bra ging when did we stop
                  pinching hardest kicking highest. roaring people producing more than twenty percent of the world's
                  wealth. But you wouian i know from ine cheap lack spenaina solabbles in congress. we possess more
                  milar power tnan the rest or the planer combined. nouan vou coulan ell ov the way were realed by
                  everone trom tne have me might and means to cheve the spectecular-and no intenton of Koid of u
                  erachieve fornito puis deliberations, mired in snits about what Should we quit following North Korea's
                  Twitter feeds? Unfriend Iran on Facebook? Withdraw our troops from the nuclei of terrorism too soon or
                  much loo soon: Ala basnar al-Assad or doet nim: Appease cnina lillie ov lue or all ar once? e United
                  Siates has ser selt on a course of wilteeselt-diminishment Seventv.tour vears ago the perfect American
                  was Superman, who an undocumented ice. more powertu than a New York mmes boggel, una dble to ascere
                  tan bunames me stute elevator round Gomnain Nine our or len or the tallest bul dinas in the world are
                  now in asid or me middle cast. lallest is BuriKhalita in Dubai. At 2.723 feet. it's nearly twice as
                  Read the passage and answer the question based on it. when did America quit bra ging when did we stop
                  pinching hardest kicking highest. roaring people producing more than twenty percent of the world's
                  wealth. But you wouian i know from ine cheap lack spenaina solabbles in congress. we possess more
                  milar power tnan the rest or the planer combined. nouan vou coulan ell ov the way were realed by
                  everone trom tne have me might and means to cheve the spectecular-and no intenton of Koid of u
                  erachieve fornito puis deliberations, mired in snits about what Should we quit following North Korea's
                  Twitter feeds? Unfriend Iran on Facebook? Withdraw our troops from the nuclei of terrorism too soon or
                  much loo soon: Ala basnar al-Assad or doet nim: Appease cnina lillie ov lue or all ar once? e United
                  Siates has ser selt on a course of wilteeselt-diminishment Seventv.tour vears ago the perfect American
                  was Superman, who an undocumented ice. more powertu than a New York mmes boggel, una dble to ascere
                  tan bunames me stute elevator round Gomnain Nine our or len or the tallest bul dinas in the world are
                  now in asid or me middle cast. lallest is BuriKhalita in Dubai. At 2.723 feet. it's nearly twice as
                </p>
              </Box>
              <Box flexBasis="40%" bg="white.900" p="4" height="60vh" overflowY="scroll" rounded="3xl">
                <Text fontSize="14px" fontWeight="600">
                  DiREctions tor the question
                </Text>
                <p>
                  Read the passage and answer the question based on it. when did America quit bra ging when did we stop
                  pinching hardest kicking highest. roaring people producing more than twenty percent of the world's
                  wealth. But you wouian i know from ine cheap lack spenaina solabbles in congress. we possess more
                  milar power tnan the rest or the planer combined. nouan vou coulan ell ov the way were realed by
                  everone trom tne have me might and means to cheve the spectecular-and no intenton of Koid of u
                  erachieve fornito puis deliberations, mired in snits about what Should we quit following North Korea's
                  Twitter feeds? Unfriend Iran on Facebook? Withdraw our troops from the nuclei of terrorism too soon or
                  much loo soon: Ala basnar al-Assad or doet nim: Appease cnina lillie ov lue or all ar once? e United
                  Siates has ser selt on a course of wilteeselt-diminishment Seventv.tour vears ago the perfect American
                  was Superman, who an undocumented ice. more powertu than a New York mmes boggel, una dble to ascere
                  tan bunames me stute elevator round Gomnain Nine our or len or the tallest bul dinas in the world are
                  now in asid or me middle cast. lallest is BuriKhalita in Dubai. At 2.723 feet. it's nearly twice as
                  Read the passage and answer the question based on it. when did America quit bra ging when did we stop
                  pinching hardest kicking highest. roaring people producing more than twenty percent of the world's
                  wealth. But you wouian i know from ine cheap lack spenaina solabbles in congress. we possess more
                  milar power tnan the rest or the planer combined. nouan vou coulan ell ov the way were realed by
                  everone trom tne have me might and means to cheve the spectecular-and no intenton of Koid of u
                  erachieve fornito puis deliberations, mired in snits about what Should we quit following North Korea's
                  Twitter feeds? Unfriend Iran on Facebook? Withdraw our troops from the nuclei of terrorism too soon or
                  much loo soon: Ala basnar al-Assad or doet nim: Appease cnina lillie ov lue or all ar once? e United
                  Siates has ser selt on a course of wilteeselt-diminishment Seventv.tour vears ago the perfect American
                  was Superman, who an undocumented ice. more powertu than a New York mmes boggel, una dble to ascere
                  tan bunames me stute elevator round Gomnain Nine our or len or the tallest bul dinas in the world are
                  now in asid or me middle cast. lallest is BuriKhalita in Dubai. At 2.723 feet. it's nearly twice as
                </p>
              </Box>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <HStack pt="4">
                <Button
                  size="md"
                  rounded="2xl"
                  bg="brand.900"
                  sx={{
                    color: "#fff",
                    fontSize: "12px",
                  }}
                  variant="solid"
                >
                  Mark for Review & Next
                </Button>
                <Button
                  size="md"
                  rounded="2xl"
                  bg="brand.900"
                  sx={{
                    color: "#fff",
                    fontSize: "12px",
                  }}
                  variant="solid"
                >
                  Mark for Review & Next
                </Button>
              </HStack>
              <Button
                size="md"
                rounded="2xl"
                bg="#FFA53B"
                sx={{
                  color: "#fff",
                  fontSize: "12px",
                }}
                variant="solid"
              >
                Mark for Review & Next
              </Button>
            </Flex>
          </Box>
        </Box>
        <Box flexBasis="25%" bg="brand.800" rounded="3xl">
          <Box>
            <Grid templateColumns="repeat(5, 1fr)" gap={6} p="10">
              {[...Array(26)].map((data, i) => (
                <GridItem key={i} boxSize="50px" rounded="2xl" h="10">
                  <IconButton
                    key={i}
                    cursor="pointer"
                    bg={checkType(i).color}
                    clipPath={checkType(i).clipPath}
                    color="black.900"
                    aria-label="Call Segun"
                    size="lg"
                    boxShadow="xl"
                    className={checkType(1)?.type.toLowerCase() === "not answered" ? "pentagon" : ""}
                    onClick={() => handleClick(i)}
                    icon={<Text>{i + 1}</Text>}
                  />
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Template1;
