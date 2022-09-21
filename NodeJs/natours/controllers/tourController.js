const Tour = require('../models/tourModel');
// const fs = require('fs');
// const file = fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`);
// const data = JSON.parse(file);
// const fun   = async () => {
//   Tour.create(data)
// }
// fun();


exports.getToursByMonth = async (req,res) => {
  try {
    const year = req.query.year * 1;
    const tourMonth = await Tour.aggregate([
      {
        $unwind: '$startDates'
      },
      {
        $match: {
          startDates: {
            $gte: new Date(`${year}-01-01`),
          }
        }
      },
      {
        $group: {
          _id: { $month : '$startDates'},
          noOfTours: {$sum : 1},
          tours: { $push : '$name'}
        }
      },
      {
        $addFields: {
          month: '$_id'
        }
      },
      {
        $project : {
          _id : 0
        }
      }
    ]);
    return res.status(200).send({data: tourMonth})
  }catch(err) {
    console.log(err);
    return res.status(400).send({message: err.message})
  }
}

exports.topTours = async (req,res,next) => {
    req.query.sort = 'price,ratingAverage';
    next();
}
exports.getTourStats = async (req,res) => {
  try {
      const tourStats = await Tour.aggregate([
        {
          $match : {
            ratingsAverage: {
              $gt: 2.0
            }
          }
        },
        {
          $group: {
            _id: '$difficulty',
            averageRatings: { $avg : '$ratingsAverage'},
            maxPrice: { $max : '$price'},
            minPrice: { $min : '$price'}
          }
        }
      ])
      return res.status(200).send({length: tourStats.length,data: tourStats})
  }catch (err) {
    console.log(err);
    return res.status(400).send({message: err.message})
  }
}

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create({
      ...req.body,
    });
    res.status(201).json({
      status: 'success',
      data: {
        newTour,
      },
    });
  } catch (err) {
    console.log(err);
    res.send({ success: false, message: err.message });
  }
};
exports.getAllTours = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeData = ['page','sort','limit','fields'];
    excludeData.map((el) => delete queryObj[el]);
    let queryString = JSON.stringify(queryObj);
    queryString.replace(/\b(gte | gt | lte | lt)\b/g, match => `$${match}`);
    console.log(JSON.parse(queryString))
    queryString = JSON.parse(queryString);
    
    //querying
    let query = Tour.find(queryObj);
    
    //sorting
    if(req.query.sort) {
      const sortString = req.query.sort.split(',').join(' ');
      query = query.sort(sortString);
    }

    //pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip((page - 1)*limit).limit(limit);
    if(req.query.page) {
      const count = await query.countDocuments();
      if(skip >= count) {
        throw new Error("No more documents to show")
      } 
    }
    //executing query
    const tour = await query;
    res.status(200).send({ status: 'success', data: tour });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
exports.getTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findById(id);
    res.status(200).json({ message: 'tour', data: tour });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'wrong id' });
  }
};
exports.updateTour = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTour = await Tour.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    res.status(200).send({ status: 'success', data: updatedTour });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};
exports.deleteTour = async (req, res) => {
  try {
    const id = req.params.id;
    await Tour.findByIdAndDelete(id)
    res.status(200).send({ status: 'success' });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

exports.checkBody = (req, res, next) => {
  if (req.body.name === undefined || req.body.price === undefined) {
    return res.status(500).json({ status: 'error', message: 'Please defined the name and price' });
  }
  next();
};
