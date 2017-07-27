const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./error-handler')();
// const ensureAuth = require('./ensure-auth')();

const Unicorn = require('./models/unicorn');

app.use(bodyParser.json());
// bodyParser has a next() by default
// app.use(morgan('dev'));

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
app.patch('/unicorns/:id', (req, res) => {
    Unicorn.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {
        new: true,
        runValidators: true
    })
        .then(unicorn => res.send(unicorn))
        .catch(console.log);
});

module.exports = app;