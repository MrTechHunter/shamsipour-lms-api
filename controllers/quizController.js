const QuizModel = require("../model/QuizModel");
const Quizzes = require("../model/QuizModel");
const { questions, answers } = require("./data");

/** insert all quizzes */
module.exports.postQuiz__controller = async (req, res, next) => {
    try {
        const { question, options } = req.body;

        if (!question || !options || !req.file) {
            return res.status(400).json({
                error: "Please Provide All Information",
            });
        }

        const pic=await cloudinary.uploader.upload(req.file.path)

        const quiz = new QuizModel({
            question,
            options,
            questionThumbnail,
            createdAt: req.user._id,
        });
        quiz
            .save()
            .then((result) => {
                return res.status(200).json({
                    result,
                });
            })
            .catch((err) => {
                console.log(err);
                return res.status(400).json({
                  error: "Something went wrong",
                });
            });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Something went wrong",
        });
    }
};

// GET all quiz quizzes
module.exports.getQuizzes__controller = async (req, res, next) => {
    try {
        const quizzes = await Quizzes.find();
        return res.status(200).json({
            quizzes,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Something went wrong",
        });
    }
};

/** delete all quizzes */
module.exports.deleteQuizzes__Controller = async (req, res, next) => {
    try {
        await Quizzes.deleteMany();
        res.json({ msg: "Quizzes Deleted Successfully...!" });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Something went wrong",
        });
    }
};