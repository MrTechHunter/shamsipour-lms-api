const CourseModel = require("../model/CourseModel");
const cloudinary=require('../middlewares/cloudinary')

module.exports.postLesson__controller = async (req, res, next) => {
    try {
        const { lessonDescription, lessonName } = req.body;
    
        if (!lessonDescription || !lessonName || !req.file) {
          return res.status(400).json({
            error: "Please Provide All Information",
          });
        }
    
        const pic=await cloudinary.uploader.upload(req.file.path)
        //console.log(pic.secure_url)
    
        //const url = req.protocol + "://" + req.get("host");
    
        const lesson = new LessonModel({
          lessonDescription,
          lessonName,
          lessonThumbnail: pic.secure_url,
          createdAt: req.user._id,
        });
        lesson
          .save()
          .then((result) => {
            //console.log(result)
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

module.exports.getLessons__controller = async (req, res, next) => {
    try {
      const lessons = await LessonModel.find().populate(
        "createdAt",
        "role _id userName email"
      );
      return res.status(200).json({
        lessons,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        error: "Something went wrong",
      });
    }
};

module.exports.getOneLesson__controller = async (req, res, next) => {
    try {
      const { lessonId } = req.params;
      console.log(courseId);
      const lesson = await LessonModel.findOne({ _id: lessonId });
      return res.status(200).json({
        lesson,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        error: "Something went wrong",
      });
    }
};

module.exports.deleteLesson__Controller = async (req, res, next) => {
    try {
      const { lessonId } = req.body;
    //   console.log(lessonId)
      const lesson = await LessonModel.findOneAndDelete({ _id: lessonId });
      return res.status(200).json({
        lesson,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        error: "Something went wrong",
      });
    }
  };