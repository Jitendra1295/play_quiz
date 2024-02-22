const express = require("express");
const router = express.Router();
const fs = require('fs');
// const path = require('path');
const quizCategory = require("../module/quizType")

router.get('/category', (req, res) => {
    // Handle GET request to /quiz
    console.log("category::", quizCategory);
    res.send(quizCategory)
});

router.get('/questions/:id', (req, res) => {
    const { id } = req.params;
    const quizFilePath = `./data/quiz.json`;

    fs.readFile(quizFilePath, (err, data) => {
        if (err) {
            console.error('Error reading quiz data:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        const quizData = JSON.parse(data);
        const result = quizData.filter(data => data.id == id)
        res.json(result);
    });
});

module.exports = router;