const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    courseDescription: {
      type: String,
      required: true,
    },
    courseThumbnail: {
      type: String,
      required: true,
    },
    lessons: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
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

const CourseModel = mongoose.model("Course", courseSchema);

module.exports = CourseModel;
