const mongoose = require('mongoose')
const validator = require('validator')


const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error('Email invalid')
            }
        },
        trim: true,
        lowercase: true

    },
    age: {
        type: Number,
        validate(val){
            if (val < 0){
                throw new Error('Age must be positive !')
            }
        },
        default: 0
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(val){
            if (val.toLowerCase().includes('password')){
                throw new Error('Password can not include string password !')
            }
        }
    }
})

module.exports = User

// const me = new User({
//     name: "Hafeez",
//     age: 22
//     // age: 'ss'
// })

// me.save().then((res)=>{
//     console.log(res);
    
// }).catch((er)=>{
//     console.log(er);
    
// })
