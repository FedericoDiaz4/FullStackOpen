import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Titles = ({ text }) => <h1>{text}</h1>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [maxVotes, setMaxVotes] = useState(0);

  const handleClickNext = () => {
    setSelected(Math.floor(Math.random() * 8));
  };

  const handleClickVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    setMaxVotes(GetAnecdoteWithMoreVotes(newVotes));
  };

  const GetAnecdoteWithMoreVotes = (arrayVotes) => {
    return arrayVotes.reduce(
      (maxIndex, value, currentIndex, arr) =>
        value > arr[maxIndex] ? currentIndex : maxIndex,
      0
    );
  };

  return (
    <>
      <Titles text={"Anecdote of the day."} />
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <Button handleClick={handleClickNext} text={"next anecdote"} />
      <Button handleClick={handleClickVote} text="Vote!" />´
      <Titles text={"Anecdote with most votes"} />
      <p>{anecdotes[maxVotes]}</p>
      <p>has {votes[maxVotes]} votes</p>
    </>
  );
};

export default App;
