// Question: Pourquoi séparer les routes dans différents fichiers ?
// Réponse :
// Question : Comment organiser les routes de manière cohérente ?
// Réponse:

const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// Routes pour les cours
router.get("/", courseController.getAllCourses);
router.post("/", courseController.createCourse);
router.get("/stats", courseController.getCourseStats);
router.get("/:id", courseController.getCourse);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

module.exports = router;
