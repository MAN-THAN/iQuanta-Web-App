import React from "react";
import CoursesAdd from "@/components/courses/courseAd";
import YourCourses from "@/components/courses/yourCourses";
import OurOnlineCourse from "@/components/courses/ourOnlineCourse";
import RootLayout from "@/components/layouts/layout";
import LearnLayout from "@/components/layouts/learnLayout";

const Courses = () => {
  return (
    <LearnLayout>
      <CoursesAdd />
      <YourCourses />
      <OurOnlineCourse />
    </LearnLayout>
  );
};

export default Courses;
