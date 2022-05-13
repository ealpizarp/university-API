const router = require("express").Router();
const {
  addInternship,
  updateInternship,
  getInternship,
  addTopic,
  updateTopic,
  getTopic,
  addInternshipCourse,
  updateInternshipCourse,
  getInternshipCourse,
} = require("../controllers/internshipController");

const { authenticateToken } = require("../middleware/userMiddleware");

router.post("/add/internship", authenticateToken, addInternship);
router.put("/update/internship/:id", authenticateToken, updateInternship);
router.get("/get/internship/:id", authenticateToken, getInternship);

router.post("/add/topic", authenticateToken, addTopic);
router.put("/update/topic/:id", authenticateToken, updateTopic);
router.get("/get/topic/:id", authenticateToken, getTopic);

router.post("/add/internshipcourse", authenticateToken, addInternshipCourse);
router.put(
  "/update/internshipcourse/:internshipId/:courseId",
  authenticateToken,
  updateInternshipCourse
);
router.get(
  "/get/internshipcourse/:internshipId/:courseId",
  authenticateToken,
  getInternshipCourse
);

module.exports = router;
