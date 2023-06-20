const mongoose = require("mongoose");

const lessonSchema = mongoose.Schema(
  {
    lessonName: {
      type: String,
      required: true,
    },
    lessonDescription: {
      type: String,
      required: true,
    },

    lessonThumbnail: {
      type: String,
      required: true,
    },
    course: [{
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
);

const LessonModel = mongoose.model("Lesson", lessonSchema);

module.exports = LessonModel;
