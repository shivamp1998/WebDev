const { Schema, Model, model }  = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: {
            validator: (value) => {
                const validator = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
                if(validator.test(value)) return true;
                return false;
            },
            message: 'Provided Email is Invalid'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 8
    },
    confirmPassword : {
        type: String,
        required: [true,'Confirm password is required'],
        minlength: 8,
        validate: {
            validator: (value) => {
                return value === this.password;
            },
            message: 'Confirm password and Password do not match'
        }
    },
    photo: String
})

userSchema.pre('save', function(next){
    if(this.isModified('password')) return next();
    bcrypt.genSalt(10, function(err,salt){
        
    })
})

const userModel = model('user',userSchema)
module.exports =  userModel;