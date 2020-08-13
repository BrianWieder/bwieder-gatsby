import React from "react";
import { graphql } from "gatsby";
import { Tabs, Tab } from "@material-ui/core";
import SubjectDisplay from "../components/SubjectDisplay";

export type Course = {
  name: string;
  course: string;
  grade: string;
  inProgress: boolean;
  programmingLanguage: string;
  subject: string;
  description: string;
  id: string;
  completionDate: string;
};

type Props = {
  data: {
    allCoursesJson: {
      nodes: Course[];
    };
  };
};

const CoursesPage: React.FC<Props> = ({ data }) => {
  const [selectedSubject, setSelectedSubject] = React.useState(0);

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

  const subjectTabs: JSX.Element[] = [];
  let subjectPanel: JSX.Element = <></>;
  let i = 0;
  subjects.forEach((val, key) => {
    subjectTabs.push(<Tab label={key} key={key} />);
    if (selectedSubject === i++) {
      subjectPanel = <SubjectDisplay subject={key} courses={val} />;
    }
  });

  return (
    <div>
      <h1>Courses</h1>

      <Tabs
        value={selectedSubject}
        onChange={(e, newVal) => setSelectedSubject(newVal)}
      >
        {subjectTabs}
      </Tabs>
      {subjectPanel}
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
        completionDate
      }
    }
  }
`;
