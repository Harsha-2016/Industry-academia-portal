const mongoose = require('mongoose');

const industryCourseSchema = new mongoose.Schema({
  regulation: { type: String, required: true },
  numberOfCourses: { type: Number, required: true },
  courseNames: { type: String, required: true }, // store as comma-separated text
  industryName: { type: String, required: true }
});

module.exports = mongoose.model('IndustryCourse', industryCourseSchema);
