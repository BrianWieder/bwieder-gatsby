import React from "react";
import { graphql } from "gatsby";
import { GroupedList } from "@fluentui/react/lib/GroupedList";
import { SelectionMode } from "@fluentui/react/lib/DetailsList";
import { IGroup } from "@fluentui/react/lib/DetailsList";
import CourseListItem from "../components/CourseListItem";
import { initializeIcons } from "@fluentui/react/lib/Icons";

initializeIcons();

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

  const groups: IGroup[] = [];
  const items: { name: string }[] = [];

  let subjectStartIndex = 0;
  subjects.forEach((courses, subject) => {
    const subjectCourses: IGroup[] = [];
    let coursesStartIndex = subjectStartIndex;
    courses.forEach(course => {
      const courseDescription = course.description.split("\n");
      courseDescription.forEach(desc => {
        items.push({ name: desc });
      });
      const courseLength = courseDescription.length;
      subjectCourses.push({
        key: course.name,
        name: course.name,
        count: courseLength,
        startIndex: coursesStartIndex,
      });
      coursesStartIndex += courseLength;
    });
    groups.push({
      key: subject,
      name: subject,
      children: subjectCourses,
      count: coursesStartIndex,
      startIndex: subjectStartIndex,
    });
    subjectStartIndex += coursesStartIndex;
  });

  return (
    <div>
      <h1>Courses</h1>
      <GroupedList
        groups={groups}
        items={items}
        onRenderCell={(depth?: number, item?: string, index?: number) => (
          <CourseListItem item={item} itemDepth={depth} itemIndex={index} />
        )}
        selectionMode={SelectionMode.single}
      />
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
