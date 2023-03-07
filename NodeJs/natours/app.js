const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const userRoutes = require('./routes/userRoutes');
const tourRoutes = require('./routes/tourRoutes');
const app = express();

const limiter = rateLimit({
    max: 100,
    widowMs: 60*60*1000,
    message: 'Too many requests from this IP, please try again in an hour.'
})

app.use(helmet()); 
app.use('/api',limiter);
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.json());
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tours',tourRoutes)

module.exports = app;
