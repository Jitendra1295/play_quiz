const fs = require('fs');
const path = require('path');

// Function to read quiz data from a JSON file
const readQuizData = (filePath) => {
    try {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading quiz data:', error);
        return null;
    }
};

// Function to get quiz titles and IDs from all quiz files in a directory
const getAllQuizTitlesAndIds = (directoryPath) => {
    const quizFiles = fs.readdirSync(directoryPath);
    // console.log("quizFiles::", quizFiles);
    const quizTitlesAndIds = [];

    quizFiles.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);
        // console.log("quizFiles::", filePath, stat);
        if (stat.isFile() && path.extname(filePath) === '.json') {
            const quizData = readQuizData(filePath);
            // console.log("quizData 123::", quizData);
            if (quizData) {
                quizData.forEach((data) => {
                    console.log("quizData data::", data);
                    const { id, title } = data;
                    quizTitlesAndIds.push({ id, title });

                })
            }
        }
    });
    console.log("quizTitlesAndIds:", quizTitlesAndIds);
    return quizTitlesAndIds;
};

// Get quiz titles and IDs from all quiz files in a directory
const quizDirectoryPath = './data'; // Change to the path where your quizzes are stored
const titlesAndIds = getAllQuizTitlesAndIds(quizDirectoryPath);
console.log("titlesAndIds:", titlesAndIds);

module.exports = titlesAndIds;
