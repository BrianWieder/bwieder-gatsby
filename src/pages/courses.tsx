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
  const para = courses.map(course => {
    return <p key={course.id}>{course.name}</p>;
  });
  return (
    <div>
      <h1>Courses</h1>
      {para}
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
