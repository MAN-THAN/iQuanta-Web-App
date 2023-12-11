import { Button, Box, Text } from "@chakra-ui/react";
import { Star } from "lucide-react";
import React from "react";
import { BsStarFill } from "react-icons/bs";

const SuggestionSection = () => {
  const suggestionList = [
    {
      name: "Swati Rana",
      dsg: "Reasoning expert",
      img: "/reel.jpg",
    },
    {
      name: "Rounak Mittal",
      dsg: "Reasoning expert",
      img: "/reel1.jpg",
    },
    {
      name: "Himadri Rana",
      dsg: "Reasoning expert",
      img: "/reel2.jpg",
    },
  ];

  return (
    <section>
      <div className="bg-white border w-full mx-auto mt-2">
        <div className="p-5 text-md font-semibold">
          <p>Suggested people to learn from</p>
        </div>
        <div className="flex flex-col bg-white p-auto">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap">
              {suggestionList.map((data, i) => (
                <Box className="px-3 relative justify-between">
                  <Box
                    rounded="3xl"
                    className="w-52 h-72 max-w-xs relative  overflow-hidden  shadow-md bg-cover bg-center hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    backgroundImage={`url(${data.img})`}
                  >
                    <Box position="absolute" right="3" top="3">
                      <BsStarFill size="26px" color="#E87D68" />
                    </Box>
                    <div
                      style={{
                        position: "absolute",
                        top: "40%",
                        right: "0",
                        bottom: "0",
                        left: "0",
                        background: "linear-gradient(to bottom, #ffffff 0%, #000000 60%)",
                        zIndex: "0",
                        mixBlendMode: "multiply",
                      }}
                    ></div>
                    <Box className="text-center" mt="80%">
                      <Text className="font-semibold opacity-90 text-white">{data.name}</Text>
                      <p className="text-xs text-white opacity-90">{data.dsg}</p>
                      <Box px="4" rounded="2xl" py="4">
                        <Button
                          bg="#B4B4B45C"
                          color="white.900"
                          fontSize="sm"
                          _hover={{ bg: "white.900", color: "black.900" }}
                          width="full"
                        >
                          Add new friend
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuggestionSection;
