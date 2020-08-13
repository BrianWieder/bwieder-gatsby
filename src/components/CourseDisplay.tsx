import React from "react";
import { Course } from "../pages/courses";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Paper,
  TablePagination,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

type PropType = {
  course: Course;
};

const CourseDisplay: (props: PropType) => JSX.Element = ({ course }) => {
  const descriptionParts = course.description.split("\n");
  const lines: JSX.Element[] = [];
  descriptionParts.forEach((description, index) => {
    lines.push(<Typography>{description.replace("*", "")}</Typography>);
  });

  return (
    <Paper style={{ margin: 10 }}>
      <div style={{ padding: 10 }}>
        <Typography>{course.name}</Typography>
        <Typography>{course.course}</Typography>
        <Typography>{course.completionDate}</Typography>
        <Typography>
          Grade: {course.inProgress ? "In Progress" : course.grade}
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{course.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>{lines}</div>
          </AccordionDetails>
        </Accordion>
      </div>
    </Paper>
  );
};

export default CourseDisplay;
