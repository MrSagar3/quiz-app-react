import React from 'react';

interface QuestionProps {
  question: string;
  answers: string[] | number[];
  onAnswerSelected: (answer: string | number) => void;
}

const Question = ({ question, answers, onAnswerSelected }: QuestionProps) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => onAnswerSelected(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
