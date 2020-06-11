import React from "react";
import { graphql } from "gatsby";

type Course = {
  name: string;
  course: string;
  grade: string;
  inProgress: boolean;
  programmingLanguage: string;
  subject: string;
  description: string;
  id: string;
};

type Props = {
  data: {
    allCoursesJson: {
      nodes: Course[];
    };
  };
};

const CoursesPage: React.FC<Props> = ({ data }) => {
  const courses = data.allCoursesJson.nodes;
  const subjects = new Map<string, Course[]>();
  courses.forEach(course => {
    const otherCourses = subjects.get(course.subject);
    if (otherCourses === undefined) {
      subjects.set(course.subject, [course]);
    } else {
      otherCourses.push(course);
      subjects.set(course.subject, otherCourses);
    }
  });

  const display: JSX.Element[] = [];
  subjects.forEach((subjectCourses, subject) => {
    const subjectCoursesDis = subjectCourses.map(course => {
      return <p key={course.id}>{course.name}</p>;
    });
    display.push(
      <div key={subject}>
        <h1>{subject}</h1>
        {subjectCoursesDis}
      </div>
    );
  });
  return (
    <div>
      <h1>Courses</h1>
      {display}
    </div>
  );
};

export default CoursesPage;

export const pageQuery = graphql`
  query {
    allCoursesJson {
      nodes {
        name
        course
        grade
        inProgress
        programmingLanguage
        subject
        description
        id
      }
    }
  }
`;
