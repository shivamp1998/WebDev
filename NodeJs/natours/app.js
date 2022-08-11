const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

let tours = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8'));
app.get('/api/v1/tours', (req, res) => {
  res.json({ status: 'success', results: tours.length, data: tours });
});
app.get('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id;
  const tour = tours.find((data) => data.id === +id);
  res.json({ status: 'success', data: tour });
});
app.post('/api/v1/tours', (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newObj = Object.assign({ id: newId }, { ...req.body });
  tours.push(newObj);
  fs.writeFile('./dev-data/data/tours-simple.json', JSON.stringify(tours), (err) => {
    if (err) {
      return;
    }
    res.status(201).json({
      status: 'success',
      data: tours,
    });
  });
});

app.listen(3001, () => {
  console.log('Server Started on port 3001');
});
