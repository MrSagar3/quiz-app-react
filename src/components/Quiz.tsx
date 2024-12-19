import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import { questions } from '../data/questions';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerSelected = (answer: any) => {
    if (questions[currentQuestionIndex].correct === answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(questions.length);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  if (currentQuestionIndex >= questions.length) {
    return <Result score={score} totalQuestions={questions.length} onRestart={handleRestart} />;
  }

  return (
    <Question
      question={questions[currentQuestionIndex].question}
      answers={questions[currentQuestionIndex].answers}
      onAnswerSelected={handleAnswerSelected}
    />
  );
};

export default Quiz;
