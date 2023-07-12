const express = require('express');
const flockRoutes = require('./routes/flock');
const costRoutes = require('./routes/cost');
const applyMiddleware = require('./middleware/middlewar');

const app = express();

applyMiddleware(app);

app.use('/flock', flockRoutes);
app.use('/cost', costRoutes);

module.exports = app;
