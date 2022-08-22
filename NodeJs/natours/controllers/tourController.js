const Tour = require('../models/tourModel')

exports.getAllTours = (req, res) => { 
  res.status(200).send({ status: 'success' });
};
exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create({
      ...req.body
    })
    res.status(201).json({ status: 'success' ,data:{
      newTour
    }});
  }catch(err)  {
    console.log(err);
  }
};
exports.getTour = (req, res) => {
  res.status(200).send({ status: 'success' });
};
exports.updateTour = (req, res) => {
  res.status(200).send({ status: 'success' });
};
exports.deleteTour = (req, res) => {
  res.status(200).send({ status: 'success' });
};


exports.checkBody = (req,res,next) => {
  if(req.body.name === undefined || req.body.price === undefined) {
      return res.status(500).json({status:"error", message: "Please defined the name and price"});
  }
  next();
}

