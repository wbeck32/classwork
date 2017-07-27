const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./error-handler')();
// const ensureAuth = require('./ensure-auth')();

app.use(morgan('dev'));
app.use(express.static('public'));

// const auth = require('./routes/auth');
const unicorns = require('./routes/unicorns');
// const meadows = require('./routes/meadows');
// const gaggles = require('./routes/gaggles');

// app.use('/auth', auth);
app.use('/unicorns', unicorns);
// app.use('/meadows', ensureAuth, meadows);
// app.use('/gaggles', ensureAuth, gaggles);

app.use(errorHandler);

module.exports = app;