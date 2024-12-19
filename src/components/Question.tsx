import React from 'react';

interface QuestionProps {
  question: string;
  answers: any[];
  onAnswerSelected: (answer: any) => void;
}

const Question: React.FC<QuestionProps> = ({ question, answers, onAnswerSelected }) => {
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {answers.map((answer, index) => (
          <li key={index} onClick={() => onAnswerSelected(answer)}>
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
