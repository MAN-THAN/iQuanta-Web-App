import React from "react";
import FeaturesCard from "./featuresCard";
import { getGroupCourseList } from "@/api/feed/groups/exam";
import { useQuery } from "react-query";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {Box} from '@chakra-ui/react'
const CourseList = ({groupId}) => {
const [state, setState] = useState();
const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
        queryKey: ["getGroupCourseList", groupId],
        queryFn: () => getGroupCourseList(groupId),
        onError: (error, variables, context) =>
          toast.error(`${error?.response?.data?.error?.message || "some error"}`, {
            position: toast.POSITION.TOP_RIGHT,
          }),
        onSuccess: (res) => setState(res.data.data.courseList),
      });
console.log("courseList",state);
  return (
    <Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              px="4"
              gap="3"
              justifyContent="space-between"
              bg="white.900"
            >
    {state?.map((course,index)=>{
        return <FeaturesCard data={course} onButtonClick={() => router.push(`/courses/${course._id}`)}/>
    })}</Box>
  );
};

export default CourseList;
