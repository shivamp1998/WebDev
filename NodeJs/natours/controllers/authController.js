const User = require('../models/userModel');
exports.signUp = async (req,res) => {
    try {
        const user = User.create({
            ...req.body
        })
        return res.status(200).send({data: user})
    }catch(err) {
        console.log(err);
        res.status(400).send({message: err.message})
    }
}