const mongoose = require('mongoose')

/** Question model */
const questionSchema = mongoose.Schema(
    {
        question: {
            type: String,
            default: []
        },
        options: {
            type: Array,
            default: []
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