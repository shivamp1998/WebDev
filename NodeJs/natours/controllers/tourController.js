exports.getAllTours = (req, res) => {
  res.status(200).send({ status: 'success' });
};
exports.createTour = (req, res) => {
  res.status(200).send({ status: 'success' });
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

