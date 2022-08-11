const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const tourRoutes = require('./routes/tourRoutes');
const app = express();


app.use(morgan('dev'))
app.use(express.json());
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tours',tourRoutes)



app.listen(3001, () => {
  console.log('Server Started on port 3001');
});
