const mongoose = require("mongoose")

const quizSchema = new mongoose.Schema({
    quiz: { type: Object, required: true, },
});

const Quiz = new mongoose.model("quiz", quizSchema);

exports.Quiz = Quiz