const mongoose = require("mongoose");

const roadmapSchema = mongoose.Schema(
  {
    roadmapName: {
      type: String,
      required: true,
    },
    roadmapDescription: {
      type: String,
      required: true,
    },

    roadmapThumbnail: {
      type: String,
      required: true,
    },
    roadmap: [{
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

const RoadmapModel = mongoose.model("Roadmap", roadmapSchema);

module.exports = RoadmapModel;
