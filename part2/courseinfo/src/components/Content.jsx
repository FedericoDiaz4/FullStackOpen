import Part from "./Part";

const Content = ({ parts }) => (
  <>
    {parts.map((part, i) => {
      return <Part key={part.id} part={part} />;
    })}
  </>
);

export default Content;
