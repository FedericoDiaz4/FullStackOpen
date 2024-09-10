import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  const sum = course.parts.reduce((sum, elem) => sum + elem.exercises, 0);

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total sum={sum} />
    </>
  );
};

export default Course;
