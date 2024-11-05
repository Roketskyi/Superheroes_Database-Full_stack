const express = require('express');
const cors = require('cors');
const superheroRoutes = require('./routes/superheroRoutes');
const path = require('path');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.use('/api/superheroes', superheroRoutes);
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use(errorHandler);

module.exports = app;