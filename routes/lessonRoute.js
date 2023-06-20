const {
    postLesson__controller,
    getLessons__controller,
    getOneLesson__controller,
    deleteLesson__Controller,
  } = require("../controllers/lessonController");
  const { adminAuthentication } = require("../middlewares/authentication");
  const { requireLogin } = require("../middlewares/requireLogin");
  
  const router = require("express").Router();
  const upload = require("../middlewares/multer");
  
  router.post(
    "/post-lesson",
    // requireLogin,
    // adminAuthentication,
    upload.single("img"),
    postLesson__controller
  );
  
  router.get("/get-lessons",
  // requireLogin, 
  getLessons__controller);
  
  router.get("/get-lesson/:lessonId",
  // requireLogin,
  getOneLesson__controller)
  
  router.delete('/delete',
  // requireLogin,
  adminAuthentication,deleteLesson__Controller)
  
  module.exports = router;
  