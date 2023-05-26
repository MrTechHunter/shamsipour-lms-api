const {
    postQuestion__controller,
    getQuestions__controller,
    deleteQustions__Controller,
    postQuizResult__controller,
    getQuizResult__Controller,
    deleteQuizResults__Controller,
  } = require("../controllers/quizController");
  const { adminAuthentication } = require("../middlewares/authentication");
  const { requireLogin } = require("../middlewares/requireLogin");
  
  const router = require("express").Router();
  
  router.post(
    "/add-question",
    // requireLogin,
    // adminAuthentication,
    postQuestion__controller
  );
  
  router.get("/questions", getQuestions__controller);

  router.delete('/delete',requireLogin,adminAuthentication,deleteQustions__Controller)

  // Quiz results
  router.post(
    "/post-result",
    requireLogin,
    adminAuthentication,
    postQuizResult__controller
  );

  router.get("/get-result", requireLogin, getQuizResult__Controller);

  router.delete('/delete-result',requireLogin,adminAuthentication,deleteQuizResults__Controller)

  
  module.exports = router;
  