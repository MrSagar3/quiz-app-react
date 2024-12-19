import React from 'react';

interface ResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ score, totalQuestions, onRestart }) => {
  return (
    <div>
      <h2>Your Score: {score}/{totalQuestions}</h2>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
