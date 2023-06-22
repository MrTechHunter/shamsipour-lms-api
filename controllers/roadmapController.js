const RoadmapModel = require("../model/RoadmapModel");
const cloudinary=require('../middlewares/cloudinary')

module.exports.postRoadmap__controller = async (req, res, next) => {
    try {
        const { roadmapDescription, roadmapName } = req.body;
    
        if (!roadmapDescription || !roadmapName || !req.file) {
          return res.status(400).json({
            error: "Please Provide All Information",
          });
        }
    
        const pic=await cloudinary.uploader.upload(req.file.path)
        //console.log(pic.secure_url)
    
        //const url = req.protocol + "://" + req.get("host");
    
        const roadmap = new RoadmapModel({
          roadmapDescription,
          roadmapName,
          roadmapThumbnail: pic.secure_url,
          createdAt: req.user._id,
        });
        roadmap
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

module.exports.getRoadmaps__controller = async (req, res, next) => {
    try {
      const roadmaps = await RoadmapModel.find().populate(
        "createdAt",
        "role _id userName email"
      );
      return res.status(200).json({
        roadmaps,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        error: "Something went wrong",
      });
    }
};

module.exports.getOneRoadmap__controller = async (req, res, next) => {
    try {
      const { roadmapId } = req.params;
      const roadmap = await RoadmapModel.findOne({ _id: roadmapId });
      return res.status(200).json({
        roadmap,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        error: "Something went wrong",
      });
    }
};

module.exports.deleteRoadmap__Controller = async (req, res, next) => {
    try {
      const { roadmapId } = req.body;
      const roadmap = await RoadmapModel.findOneAndDelete({ _id: roadmapId });
      return res.status(200).json({
        roadmap,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        error: "Something went wrong",
      });
    }
  };