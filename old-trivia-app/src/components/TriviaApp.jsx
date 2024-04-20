import React, { useEffect, useState } from "react";
import { Typography, Button } from '@mui/material';
import Question from "./Question.jsx"

const TriviaApp = () => {
    const [questions, setQuestions] = useState(null); //variable questions, setQuestions function

    //useState(null) --> default for questions is null

    useEffect(() => { //"built in" hook
        const fetchQuestions = async () => {
            const response = await fetch("https://the-trivia-api.com/v2/questions");
            const data = await response.json();
            setQuestions(data);
        };
        fetchQuestions();
    }, []); //dependency array 

    return (
        <>
            <Typography variant="h1">Trivia App</Typography>
            {questions && questions.map((question, index) => (
                <Question data = {question} key = {index} />
            ))}
        </>
    );
};

export default TriviaApp;
