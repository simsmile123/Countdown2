import React from 'react'
import Answers from "./Answers.jsx"
const Question = ({data}) => {
  return (
    <div>
    <p> {data.question.text} </p>
    <Answers
        correctAnswer={data.correctAnswer}
        incorrectAnswers={data.incorrectAnswers}
    />    
    </div>
  )
}

export default Question

//rafce, get working, style later