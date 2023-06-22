const mongoose = require('mongoose')

/** Quiz result model */

const quizResultSchema = mongoose.Schema(
    {
        score: { type: Number },
        feedback: { type: Array },
        createdAt: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    }
)

const QuizResultModel = mongoose.model("Quizresult", quizResultSchema)

module.exports = QuizResultModel