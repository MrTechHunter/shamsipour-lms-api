const Quizzes = require("../model/QuizModel");
const QuizResult = require("../model/QuizResultModel");

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

module.exports.getOneQuizResult__controller = async (req, res, next) => {
    try {
      const { quizResultId } = req.params;
      const quizResult = await CourseModel.findOne({ _id: quizResultId });
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
        const quizQuestions = await Quizzes.find();
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
        res.json({ msg: "Quiz results Deleted Successfully...!" });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Something went wrong",
        });
    }
};