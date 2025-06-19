const mongoose = require('mongoose');

const industrialVisitSchema = new mongoose.Schema({
  academicYear: { type: String, required: true },
  industryName: { type: String, required: true },
  facultyCoordinators: { type: String, required: true },
  dateOfVisit: { type: Date, required: true },
  industryExpert: { type: String, required: true },
  companyAddress: { type: String, required: true },
  outcomes: { type: String, required: true }
});

module.exports = mongoose.model('IndustrialVisit', industrialVisitSchema);
