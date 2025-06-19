const mongoose = require('mongoose');

const industryProjectSchema = new mongoose.Schema({
  academicYear: String,
  title: String,
  fundingAgency: String,
  fundAmount: Number,
  duration: String,
  principalInvestigator: String,
  industryPartner: String,
  activities: String
});

module.exports = mongoose.model('IndustryProject', industryProjectSchema);
