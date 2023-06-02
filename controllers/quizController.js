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

/** get all questions */
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

/** post all result */
module.exports.postQuizResult__controller = async (req, res, next) => {
    try {
        const {result, attempts, points, achived } = req.body;
        if (!result) throw new Error('Data Not Provided...!');

        QuizResult.create({ result, attempts, points, achived }, function (err, data) {
            res.json({ msg: "Result Saved Successfully...!" })
        })
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