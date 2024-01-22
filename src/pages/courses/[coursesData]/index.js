import CoursesData from "@/components/courses/courseData";
import CourseLayout from "@/components/layouts/courseLayout";
import LearnLayout from "@/components/layouts/learnLayout";
import React from "react";

const index = () => {
  return (
    <CourseLayout>
      <CoursesData />
    </CourseLayout>
  );
};

export default index;
