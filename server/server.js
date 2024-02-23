// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")
const quizRoute = require("./route/quiz")

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://pateljitendra055:NJUWfj8Ix0Zl3VsF@mongocluster.3lwlw9u.mongodb.net/jitendra").then(() => {
    console.log("Database connection Successfully");
}).catch((error) => {
    console.error("Database connection Fail");
})

app.use(cors());
app.use(express.json())

app.use('/api/quiz', quizRoute);

app.get('/', (req, res) => {
    res.send("welcome")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
