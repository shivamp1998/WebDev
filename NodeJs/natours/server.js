const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({path: './config.env'})
app.listen(process.env.port, () => {
    console.log('Server Started on port ' + process.env.port);
});
  