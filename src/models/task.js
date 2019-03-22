const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Task', {
    des: {
        type: String,
        required: true,
        trim: true,
        min: [3, 'Too short!']
    },
    comp: {
        type: Boolean,
        default: false
    }
})

module.exports = Task

// const mt = new Task({
//     des: "This is first taks",
//     comp: false
// })

// mt.save().then((res)=>{
//     console.log(res);
    
// }).catch((er)=>{
//     console.log(er);
    
// })