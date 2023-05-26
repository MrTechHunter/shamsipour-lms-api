const mongoose = require('mongoose')

/** Question model */
const questionSchema = mongoose.Schema(
    {
        question: {
            type: String,
        },
        options: {
            type: Array,
        },
        answers: {
            type: Number,
        },
        createdAt: {
            type: Date, default: Date.now
        },
    },
    {
        timestamps: true,
    }
)

const QuestionModel = mongoose.model("Question", questionSchema)

module.exports = QuestionModel;