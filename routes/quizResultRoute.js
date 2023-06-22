const {
    getQuizResult__Controller,
    getOneQuizResult__controller,
    postQuizResult__controller,
    deleteQuizResults__Controller,
  } = require("../controllers/quizResultController");
  const { adminAuthentication } = require("../middlewares/authentication");
  const { requireLogin } = require("../middlewares/requireLogin");
  
  const router = require("express").Router();
  
  router.post(
    "/add-quiz-result",
    // requireLogin,
    // adminAuthentication,
    postQuizResult__controller
  );
  
  router.get("/get-quiz-results",
  // requireLogin,
  getQuizResult__Controller);
  
  router.get("/get-quiz-result/:quizResultId",
  // requireLogin,
  getOneQuizResult__controller);

  router.delete('/delete-result',
  // requireLogin,
  // adminAuthentication,
  deleteQuizResults__Controller);
  
  module.exports = router;
  