const mongoose = require('mongoose')
const connectionUrl = 'mongodb://localhost:27017/task-manager-api'

mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true
} )