const IndustrialVisit = require('../models/industrialVisit.model');

const createVisit = async (req, res) => {
  try {
    const visit = new IndustrialVisit(req.body);
    await visit.save();
    res.status(201).json({ message: 'Industrial visit recorded successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving visit data.' });
  }
};

const getVisits = async (req, res) => {
  try {
    const { academicYear, industryName } = req.query;
    const filter = {};

    if (academicYear) filter.academicYear = academicYear;
    if (industryName) filter.industryName = new RegExp(industryName, 'i'); // case-insensitive match

    const visits = await IndustrialVisit.find(filter).sort({ dateOfVisit: -1 });
    res.json(visits);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching visit data.' });
  }
};

module.exports = { createVisit, getVisits };
