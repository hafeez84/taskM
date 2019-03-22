const express = require('express')
require('./db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

const app = express()
const port = process.env.PORT || 5000

//Midleware
app.use(express.json())



//user
app.post('/users', (req, res)=>{
    const user = new User(req.body)

    user.save().then((res)=>{
        res.status(201).send(user)
    }).catch((er)=>{
        res.status(400).send(er)
    })
})

app.get('/users', (req,res)=>{
    User.find({}).then((users)=>{
        res.send(users)
    }).catch((er)=>{
        res.status(400).send(er)
    })
})

app.get('/users/:id', (req,res)=>{
    const _id = req.params.id
    User.findById(_id)
    .then((user)=>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }).catch((er)=>{
        return res.status(500).send()
    })
})



//task
app.post('/tasks', (req, res)=>{
    const task = new Task(req.body)
    task.save().then((res)=>{
        res.status(201).send(task)
    }).catch((er)=>{
        res.status(400).send(er)
    })
})

app.get('/tasks', (req,res)=>{
    Task.find({}).then((tasks)=>{
        res.send(tasks)
    }).catch((er)=>{
        res.status(400).send(er)
    })
})

app.get('/tasks/:id', (req,res)=>{
    const _id = req.params.id
    User.findById(_id)
    .then((task)=>{
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }).catch((er)=>{
        return res.status(500).send()
    })
})




//listen
app.listen(port, ()=>{
    console.log(port);
    
})