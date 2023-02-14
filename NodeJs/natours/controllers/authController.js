const User = require('../models/userModel');
const jwt = require('jsonwebtoken')
exports.signUp = async (req,res) => {
    try {
        const user = new User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        })
        const token = jwt.sign({userId: user._id},process.env.SECRET,{
            expiresIn: "7d",
        });
        
        return res.status(200).send({data: user, token : token})
    }catch(err) {
        console.log(err);
        res.status(400).send({message: err.message})
    }
}

exports.login = async (req,res,next) => {
    const { email, password} = req.body;
    const user = await User.find({email: email});
    if(!user) {
        throw new Error('user does not exists');
    }
    const check = await bcrypt.compare(password, user.password)
    if(check) {
        const token = jwt.sign({userId: user._id}, process.env.SECRET, {
            expirseIn: "7d"
        })
        return res.status(200).send({token: token})
    }else{
        return res.status(401).send({message: 'unauthorized'})
    }
}

exports.protect = async (req,res,next) => {
    try {
        const token = req.headers.token;
        if(!token) {
            throw new Error('please enter token in headers');
        }
        const jwtData = jwt.verify(token, process.env.SECRET);
        const user = await User.findOneById(jwtData.userId); 
        if(!user) {
            throw new Error('User does not exists');
        }
        if(!jwtData) {
            throw new Error('token expired!');
        }
        next();
    }catch(err) {
        console.log(err);
        next(err);
    }
}

exports.restrictTo = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role)) {
            next(new AppError('permission does not exists'));
        }
        next();
    }
}

exports.forgotPassword = async(req,res,next) => {
    try {
        const user = await User.findOne({email: req.body.email});
         
    }catch(err) {
        next(err);
    }
}

exports.resetPasswored = async(req,res,next) => {
    
}