import React from "react";
import { Course } from "../pages/courses";
import CourseDisplay from "./CourseDisplay";

type PropTypes = {
  subject: string;
  courses: Course[];
};

const SubjectDisplay: (props: PropTypes) => JSX.Element = ({
  subject,
  courses,
}) => {
  const coursesDisplay = courses.map(course => (
    <CourseDisplay course={course} key={course.name} />
  ));

  return <>{coursesDisplay}</>;
};

export default SubjectDisplay;
