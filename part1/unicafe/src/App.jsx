import { useState } from "react";

const DisplayTitles = ({ text }) => <h1>{text}</h1>;

const DisplayValues = ({ text, value }) => (
  <p>
    {text}: {value}
  </p>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <DisplayTitles text={"Give Feedback"} />
      <Button handleClick={handleClickGood} text={"Good"} />
      <Button handleClick={handleClickNeutral} text={"Neutral"} />
      <Button handleClick={handleClickBad} text={"Bad"} />
      <DisplayTitles text={"Statistics"} />
      <DisplayValues text="Good" value={good} />
      <DisplayValues text="Neutral" value={neutral} />
      <DisplayValues text="Bad" value={bad} />
    </>
  );
};

export default App;
