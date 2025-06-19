const IndustryCourse = require('../models/industryCourse.model');

const createCourse = async (req, res) => {
  try {
    const course = new IndustryCourse(req.body);
    await course.save();
    res.status(201).json({ message: 'Course design entry saved successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save course entry.' });
  }
};

const getCourses = async (req, res) => {
  try {
    const { regulation, industryName } = req.query;
    const filter = {};

    if (regulation) filter.regulation = regulation;
    if (industryName) filter.industryName = new RegExp(industryName, 'i');

    const courses = await IndustryCourse.find(filter).sort({ regulation: 1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve course data.' });
  }
};

module.exports = { createCourse, getCourses };
