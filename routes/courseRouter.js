const router = require("express").Router();
const {
  addCourse,
  getCourse,
  addProfessor,
  getProfessor,
  updateCourse,
  updateProfessor
} = require("../controllers/courseController");

const { authenticateToken } = require("../middleware/userMiddleware")

// Course register CRUP operations

router.post("/add/course", authenticateToken, addCourse);
router.put('/update/course/:id', authenticateToken, updateCourse)
router.get("/get/course/:id",authenticateToken, getCourse);

// Professor CRUD operations

router.post("/add/professor", authenticateToken, addProfessor);
router.put('/update/professor/:id', authenticateToken, updateProfessor)
router.get("/get/professor/:id", authenticateToken, getProfessor);

module.exports = router;
