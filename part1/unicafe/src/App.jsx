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

const Statistics = ({ good, neutral, bad, all, average }) => {
  return (
    <>
      <DisplayValues text="Good" value={good} />
      <DisplayValues text="Neutral" value={neutral} />
      <DisplayValues text="Bad" value={bad} />
      <DisplayValues text="All" value={all} />
      <DisplayValues text="average" value={average / all} />
      <DisplayValues text="positive" value={(good / all) * 100 + "%"} />
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
    setAll(all + 1);
    setAverage(average + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setAverage(average - 1);
  };

  return (
    <>
      <DisplayTitles text={"Give Feedback"} />
      <Button handleClick={handleClickGood} text={"Good"} />
      <Button handleClick={handleClickNeutral} text={"Neutral"} />
      <Button handleClick={handleClickBad} text={"Bad"} />
      <DisplayTitles text={"Statistics"} />
      {console.log(all)}
      {all > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
        />
      ) : (
        <p>No feedback given </p>
      )}
    </>
  );
};

export default App;
