const CertificationCourse = require('../models/certificationCourse.model');

const createCourse = async (req, res) => {
  try {
    const course = new CertificationCourse(req.body);
    await course.save();
    res.status(201).json({ message: 'Certification course saved successfully.' });
  } catch {
    res.status(500).json({ error: 'Error saving certification course.' });
  }
};

const getCourses = async (req, res) => {
  try {
    const { academicYear, industryName } = req.query;
    const filter = {};
    if (academicYear) filter.academicYear = academicYear;
    if (industryName) filter.industryName = new RegExp(industryName, 'i');
    const courses = await CertificationCourse.find(filter).sort({ academicYear: -1 });
    res.json(courses);
  } catch {
    res.status(500).json({ error: 'Error fetching courses.' });
  }
};

module.exports = { createCourse, getCourses };
