// server.js
const express = require('express');
const cors = require('cors');
const quizRoute = require("./route/quiz")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.use('/api/quiz', quizRoute);

app.get('/', (req, res) => {
    res.send("welcome")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
