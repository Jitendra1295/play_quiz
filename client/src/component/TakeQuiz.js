import React, { useEffect, useState } from 'react';
import axios from "axios";
import Question from './Question';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const TakeQuiz = () => {
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill('')); // Initialize user answers array
    const { quizId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:5000/api/quiz/questions/${quizId}`)
            .then(response => {
                console.log("quiz questions:", response.data[0]);
                setQuizQuestions(response.data[0].questions);
            })
            .catch(error => {
                console.error('Error fetching quiz data:', error);
            });
    }, [quizId]);

    useEffect(() => {
        const preventCopy = (event) => {
            // Prevent copying text
            event.preventDefault();
            // Optionally, you can provide a custom message to the user
            alert('Copying text is not allowed.');
        };
        document.addEventListener('copy', preventCopy);
        return () => {
            document.removeEventListener('copy', preventCopy);
        };
    }, []);
    const handleNext = () => {
        if (index < quizQuestions.length - 1) {
            setIndex(index + 1);
        }
    };

    const handlePrevious = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const handleSubmit = () => {
        // Handle submission logic
        let countRightAnswer = 0;
        quizQuestions.forEach((questions, index) => {
            console.log("check Answer::", questions, userAnswers[index]);
            if (userAnswers[index] === questions.correctAnswer) {
                countRightAnswer++;
                console.log(`check Answer for :${questions.question}`, userAnswers[index] === questions.correctAnswer, questions.correctAnswer, userAnswers[index]);
            }
        })
        navigate(`/quiz/result/${quizQuestions.length}/${countRightAnswer}`);
    };

    const handleAnswerChange = (event) => {
        const { value } = event.target;
        setUserAnswers(prevAnswers => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[index] = value;
            return updatedAnswers;
        });
    };


    console.log("TakeQuiz:", userAnswers[index] === '', index, userAnswers);
    return (
        <div>
            {quizQuestions[index] && <Question Question={quizQuestions[index]} userAnswers={userAnswers} index={index} onAnswerChange={handleAnswerChange} />}
            <div style={{ display: 'flex', gap: "20px", justifyContent: "center", alignItems: "center", marginBottom: "20px", marginTop: "20px" }}>
                <Button variant="contained" color="primary" style={{ transform: "none", width: "100px", height: "45px" }} onClick={handlePrevious} disabled={index === 0}>Previous</Button>
                {index === quizQuestions.length - 1 ? (
                    <Button style={{ width: "100px", height: "45px" }} variant="contained" color="primary" onClick={handleSubmit} >Submit</Button>
                ) : (
                    <Button style={{ width: "100px", height: "45px" }} variant="contained" color="primary" onClick={handleNext} disabled={userAnswers[index] === '' || userAnswers[index] === undefined}>Next</Button>
                )}
            </div>
        </div >
    );
}

export default TakeQuiz
