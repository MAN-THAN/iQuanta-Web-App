import { Box, Button, Card, CardBody, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import CoursesAdd from '@/components/courses/courseAdd'
import YourCourses from '@/components/courses/yourCourses'
import OurOnlineCourse from '@/components/courses/ourOnlineCourse'

const Courses = () => {
  return (
    <div >
      <CoursesAdd />
      <YourCourses />
      <OurOnlineCourse />
    </div>
  )
}

export default Courses