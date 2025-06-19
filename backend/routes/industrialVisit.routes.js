const express = require('express');
const router = express.Router();
const { createVisit, getVisits } = require('../controllers/industrialVisit.controller');

router.post('/', createVisit);
router.get('/', getVisits);

module.exports = router;
