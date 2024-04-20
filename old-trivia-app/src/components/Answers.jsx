import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const Answers = ({ correctAnswer, incorrectAnswers }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    // Combine correct and incorrect answers
    const allAnswers = [...incorrectAnswers, correctAnswer];
    // Shuffle the answers
    const shuffled = shuffleArray(allAnswers);
    setShuffledAnswers(shuffled);
  }, [correctAnswer, incorrectAnswers]);

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div>
      {shuffledAnswers.map((answer, index) => (
        <div key={index}>
          <Button
            variant="contained"
            color={selectedAnswer === answer ? (answer === correctAnswer ? "success" : "error") : "primary"}
            onClick={() => handleAnswerClick(answer)}
          >
            {answer}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Answers;
