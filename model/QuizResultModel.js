const mongoose = require('mongoose')
const { Schema } = mongoose;


/** Quiz result model */

const quizResultSchema = mongoose.Schema(
    {
        username: { type: String },
        result: { type: Array, default: [] },
        attempts: { type: Number, default: 0 },
        points: { type: Number, default: 0 },
        achived: { type: String, default: '' },
        createdAt: { type: Date, default: Date.now }
    }
)

const QuizResultModel=mongoose.model("QuizResult", quizResultSchema)

module.exports=QuizResultModel