const express = require('express');
const router = express.Router();
const { createCourse, getCourses } = require('../controllers/industryCourse.controller');

router.post('/', createCourse);
router.get('/', getCourses);

module.exports = router;
