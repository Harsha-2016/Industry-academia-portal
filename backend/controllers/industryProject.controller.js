const IndustryProject = require('../models/industryProject.model');

const createProject = async (req, res) => {
  try {
    const project = new IndustryProject(req.body);
    await project.save();
    res.status(201).json({ message: 'Industry project saved successfully.' });
  } catch {
    res.status(500).json({ error: 'Error saving project.' });
  }
};

const getProjects = async (req, res) => {
  try {
    const { academicYear, industryPartner } = req.query;
    const filter = {};
    if (academicYear) filter.academicYear = academicYear;
    if (industryPartner) filter.industryPartner = new RegExp(industryPartner, 'i');
    const projects = await IndustryProject.find(filter).sort({ academicYear: -1 });
    res.json(projects);
  } catch {
    res.status(500).json({ error: 'Error fetching projects.' });
  }
};

module.exports = { createProject, getProjects };
