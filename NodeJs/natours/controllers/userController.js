const User = require('../models/userModel');
exports.createUser = async (req,res) => {
    try {
        const user = await User.create({
            ...req.body
        });
        return res.status(200).send({data: user});
        
    }catch(err) {
        console.log(err.message)
        return res.status(400).send({message: err.message})
    }
} 

exports.getAllUsers = (req,res) => {
    res.status(200).json({status: "success"});
} 

exports.getUser = (req,res) => {
    res.status(200).json({status: "success"});
} 

exports.updateUser = (req,res) => {
    res.status(200).json({status: "success"});
} 

exports.deleteUser = (req,res) => {
    res.status(200).json({status: "success"});
} 
