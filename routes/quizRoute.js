const {
    postQuiz__controller,
    getQuizzes__controller,
    deleteQuizzes__Controller,
  } = require("../controllers/quizController");
  const { adminAuthentication } = require("../middlewares/authentication");
  const { requireLogin } = require("../middlewares/requireLogin");
  
  const router = require("express").Router();
  const upload = require("../middlewares/multer");
  
  router.post(
    "/add-question",
    // requireLogin,
    // adminAuthentication,
    upload.single("img"),
    postQuiz__controller
  );
  
  router.get("/quiz",
  // requireLogin,
  getQuizzes__controller);

  router.delete('/delete',
  // requireLogin,
  // adminAuthentication,
  deleteQuizzes__Controller)
  
  module.exports = router;
  