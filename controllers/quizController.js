const Questions = require("../model/QuestionModel");
const QuizResult = require("../model/QuizResultModel");
const { questions, answers } = require("./data");

/** insert all questions */
module.exports.postQuestion__controller = async (req, res, next) => {
    try {
        Questions.insertMany({ questions, answers }, function (err, data) {
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Something went wrong",
        });
    }
};

// GET all quiz questions
module.exports.getQuestions__controller = async (req, res, next) => {
    try {
        const questions = await Questions.find();
        return res.status(200).json({
            questions,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Something went wrong",
        });
    }
};

/** delete all questions */
module.exports.deleteQustions__Controller = async (req, res, next) => {
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!" });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Something went wrong",
        });
    }
};

/** get all result */
module.exports.getQuizResult__Controller = async (req, res, next) => {
    try {
        const quizResult = await QuizResult.find();
        return res.status(200).json({
            quizResult,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Something went wrong",
        });
    }
};

// POST quiz answers and return score
module.exports.postQuizResult__controller = async (req, res, next) => {
    const { submittedAnswers } = req.body;
    let score = 0;
    let feedback = [];
    try {
        const quizQuestions = await Questions.find();
        quizQuestions.forEach((question, index) => {
            if (question.answer == submittedAnswers[index]) {
                score++;
                feedback.push({ question: question.question, correct: true });
            } else {
                feedback.push({ question: question.question, correct: false });
            }
        });
        res.json({ score, feedback });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Something went wrong",
        });
    }
};

/** delete all result */
module.exports.deleteQuizResults__Controller = async (req, res, next) => {
    try {
        await QuizResult.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!" });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Something went wrong",
        });
    }
};