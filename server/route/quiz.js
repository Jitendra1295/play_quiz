const express = require("express");
const router = express.Router();
const fs = require('fs');
// const path = require('path');
const { Quiz } = require("../module/quizModel")

router.get('/category', async (req, res) => {
    // Handle GET request to /quiz
    const quizCategory = await Quiz.find()
    console.log("quizCategory::", quizCategory);
    res.send(quizCategory)
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
    const quizCategory = await Quiz.find()
    console.log("quizCategory::", quizCategory[0].quiz);
    const quizData = quizCategory[0].quiz;
    const result = quizData.filter(data => data.id == id)
    console.log("quizCategory::", result);
    res.json(result);
});

module.exports = router;