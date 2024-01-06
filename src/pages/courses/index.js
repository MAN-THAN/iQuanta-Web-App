import React from "react";
import CoursesAdd from "@/components/courses/courseAd";
import YourCourses from "@/components/courses/yourCourses";
import OurOnlineCourse from "@/components/courses/ourOnlineCourse";
import RootLayout from "@/components/layouts/layout";
import LearnLayout from "@/components/layouts/learnLayout";
import CourseLayout from "@/components/layouts/courseLayout";

const Courses = () => {
  return (
    <CourseLayout>
      <CoursesAdd />
      <YourCourses />
      <OurOnlineCourse />
    </CourseLayout>
  );
};

export default Courses;
