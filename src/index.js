const express = require('express')

const app = express()

const port = process.env.PORT || 5000


app.post('/users', (req, res)=>{
    
})


app.listen(port, ()=>{
    console.log(port);
    
})