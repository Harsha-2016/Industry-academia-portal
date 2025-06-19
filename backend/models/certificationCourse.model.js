const mongoose = require('mongoose');

const certificationCourseSchema = new mongoose.Schema({
  academicYear: String,
  courseName: String,
  programName: String,
  regulation: String,
  topicsCovered: String,
  durationHours: Number,
  industryName: String,
  studentsBenefitted: Number
});

module.exports = mongoose.model('CertificationCourse', certificationCourseSchema);
