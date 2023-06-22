const mongoose = require('mongoose')

/** Quiz model */
const quizSchema = mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
        },
        options: [
            {
                type: String,
                required: true,
            },
        ],
        courses: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        }],
        createdAt: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
)

const QuizModel = mongoose.model("quiz", quizSchema)

module.exports = QuizModel;