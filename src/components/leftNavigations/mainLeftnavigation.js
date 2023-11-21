import React from "react";
import { AiOutlineHome, AiOutlineAim } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { LuFileSpreadsheet } from "react-icons/lu";
import { BiBookAlt, BiGroup, BiErrorCircle } from "react-icons/bi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import SubTopicLeftBar from "../leftSidebar/subTopicLeftBar";

const MainLeftnavigation = () => {
  const path = usePathname();
  const router = useRouter();

  const Navs = [
    {
      icon: <AiOutlineHome className="text-xl" />,
      nav: "Home",
      path: "/home",
    },
    {
      icon: <BsBook className="text-xl" />,
      nav: "Learn",
      path: "/learn",
    },
    {
      icon: <AiOutlineAim className="text-xl" />,
      nav: "Practice",
      path: "",
    },
    {
      icon: <HiMiniPencilSquare className="text-xl" />,
      nav: "Mock Tests",
      path: "",
    },
    {
      icon: <LuFileSpreadsheet className="text-xl" />,
      nav: "Read",
      path: "",
    },
    {
      icon: <BiBookAlt className="text-xl" />,
      nav: "Courses",
      path: "/courses",
    },
    {
      icon: <MdOutlineLeaderboard className="text-xl" />,
      nav: "Leaderboard",
      path: "",
    },
    {
      icon: <BiGroup className="text-xl" />,
      nav: "Groups",
      path: "",
    },
    {
      icon: <TbBrandGoogleAnalytics className="text-xl" />,
      nav: "Analytics",
    },
    {
      icon: <BiErrorCircle className="text-xl" />,
      nav: "Error Tracker",
      path: "",
    },
  ];

  return (
    <>
      <Box bg="background.400">
        {path === "/learn/examDetails/subTopics/0" ? (
          <SubTopicLeftBar />
        ) : (
          <UnorderedList
            styleType="none"
            display={{ md: "none", lg: "block", sm: "none" }}
          >
            {Navs.map((data, index) => {
              return (
                <ListItem
                  key={index}
                  _hover={{ color: "#000" }}
                  cursor="pointer"
                  onClick={() => router.push(data.path)}
                  className="flex"
                  p="14"
                  fontSize="16px"
                  fontWeight="semibold"
                >
                  {data.icon}
                  <span className="mx-4">{data.nav}</span>
                </ListItem>
              );
            })}
          </UnorderedList>
        )}
      </Box>
    </>
  );
};

export default MainLeftnavigation;
