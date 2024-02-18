const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send('<h1> This is Just Docker Test App </h1>')
})

app.listen(8000, () => {
    console.log('server started on port 8000')
})