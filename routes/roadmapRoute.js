const {
  postRoadmap__controller,
  getRoadmaps__controller,
  getOneRoadmap__controller,
  deleteRoadmap__Controller,
} = require("../controllers/roadmapController");
const { adminAuthentication } = require("../middlewares/authentication");
const { requireLogin } = require("../middlewares/requireLogin");

const router = require("express").Router();
const upload = require("../middlewares/multer");

router.post(
  "/add-roadmap",
  // requireLogin,
  // adminAuthentication,
  upload.single("img"),
  postRoadmap__controller
);

router.get("/get-roadmaps",
// requireLogin, 
getRoadmaps__controller);

router.get("/get-roadmap/:roadmapId",
// requireLogin,
getOneRoadmap__controller)

router.delete('/delete',
// requireLogin,
// adminAuthentication,
deleteRoadmap__Controller)

module.exports = router;