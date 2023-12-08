import {
  Box,
  Button,
  Card,
  CardBody,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import CoursesAdd from "@/components/courses/courseAdd";
import YourCourses from "@/components/courses/yourCourses";
import OurOnlineCourse from "@/components/courses/ourOnlineCourse";
import RootLayout from "@/components/layouts/layout";
import FeatureCardSide from "@/components/feature/featureCardSide";

const Courses = () => {
  return (
    <div>
      <CoursesAdd />
      <YourCourses />
      <OurOnlineCourse />
    </div>
  );
};

Courses.getLayout = (page) => <RootLayout>{page}</RootLayout>;

export default Courses;
