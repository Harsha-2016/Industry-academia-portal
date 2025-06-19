const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

const visitRoutes = require('./routes/industrialVisit.routes');
app.use('/api/visits', visitRoutes);

const industryCourseRoutes = require('./routes/industryCourse.routes');
app.use('/api/industry-courses', industryCourseRoutes);

const certRoutes = require('./routes/certificationCourse.routes');
app.use('/api/certification-courses', certRoutes);

const projectRoutes = require('./routes/industryProject.routes');
app.use('/api/industry-projects', projectRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
