const mongoose = require('mongoose')

/** Question model */
const questionSchema = mongoose.Schema(
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
        answer: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const QuestionModel = mongoose.model("Question", questionSchema)

module.exports = QuestionModel;