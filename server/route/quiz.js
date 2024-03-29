const express = require("express");
const router = express.Router();
const fs = require('fs');
// const path = require('path');
const quizData = require("../data/Quiz")

router.get('/category', async (req, res) => {
    // const quizCategory = await Quiz.find()
    console.log("quizCategory::", quizData);
    res.send(quizData)
});

// router.post('/add', async (req, res) => {
//     const quizData = req.body.quiz
//     const quiz = new Quiz({
//         quiz: quizData
//     })
//     console.log("quiz data:", quizData);
//     const quizResult = await quiz.save(quiz);
//     console.log("quizResult::", quizResult);
//     // res.send(quiz)
// });

router.get('/questions/:id', async (req, res) => {
    const { id } = req.params;
    // const quizCategory = await Quiz.find()
    // console.log("quizCategory::", quizCategory[0].quiz);
    // const quizData = quizCategory[0].quiz;
    const result = quizData.filter(data => data.id == id)
    console.log("quizCategory::", result);
    res.json(result);
});

module.exports = router;