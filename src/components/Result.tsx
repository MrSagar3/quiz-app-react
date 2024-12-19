import React from 'react';

interface ResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const Result = ({ score, totalQuestions, onRestart }: ResultProps) => {
  return (
    <div>
      <h2>Your Score: {score}/{totalQuestions}</h2>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
