const express = require('express');
const router = express.Router();
const { createCourse, getCourses } = require('../controllers/certificationCourse.controller');

router.post('/', createCourse);
router.get('/', getCourses);

module.exports = router;
