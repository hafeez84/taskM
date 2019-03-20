const mongodb = require('mongodb')
const MongoC = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

// const { MongoC, ObjectID } =  require('mongodb')

const connectionUrl = 'mongodb://localhost:27017'
const databse = 'task-manager'

// const id = new ObjectID()
// console.log(id);


MongoC.connect(connectionUrl, { useNewUrlParser: true }, (er, cl) => {
    if (er){
        return console.log('db error')
    }
    console.log('connected');

    const db = cl.db(databse)
  
  
  
    // db.collection('users').insertOne({
    //     name: 'naqib',
    //     age: 22
    // }, (er, res) => {
    //     if (er){
    //         return console.log('error in insert');
    //     }
    //     console.log(res.ops);
        
    // })

    // db.collection('users').insertMany( [
    //     {
    //         name: 'jen',
    //         age: 21
    //     },
    //     {
    //         name: "la",
    //         age: 12
    //     }
    // ], (er, res) => {
    //     if (er) {
    //         return console.log('insert error');
    //     }

    //     console.log(res.ops);
        
    // })

    // db.collection('tasks').insertMany( [
    //     {
    //         des: "first",
    //         comp: false
    //     },
    //     {
    //         des: "second",
    //         comp: true
    //     },
    //     {
    //         des: "third",
    //         comp: false
    //     }
    // ], (er, res) => {
    //     if (er){
    //         return console.log("error in insert");
    //     }
    //     console.log(res.ops);
        
    // })


    
    
    
    
    // db.collection('users').findOne({ _id: new ObjectID("5c8e4be54d56f14409e97879") }, (er, res) => {
    //     if (er) {
    //         return console.log('err');
    //     }

    //     console.log(res);
    // })

    // db.collection('users').find({ age: 22 }).toArray((er, res)=> {
    //     console.log(res);
        
    // })
    // db.collection('users').find({ age: 22 }).count((er, res)=> {
    //     console.log(res);
        
    // })


    // db.collection('tasks').findOne({des: 'third'}, (er, res) => {
    //     if (er) {
    //         return console.log('err');
    //     }

    //     console.log(res);
    // })

    // db.collection('tasks').find({ comp: false }).toArray((er, res)=> {
    //     console.log(res);






    // db.collection('users').updateOne({
    //     _id: new ObjectID("5c8e4cfa933025449160b6fa")
    // },{
    //     // $set: {
    //     //     name: 'new user'
    //     // }

    //     $inc:{
    //         age: 1
    //     }
    // }).then((res)=>{
    //     console.log(res);
    // }).catch((er)=>{
    //     console.log(er);
    // })
        
    // db.collection('tasks').updateMany({
    //     comp: false
    // }, {
    //     $set: {
    //         comp: true
    //     }
    // }).then((res)=>{
    //     console.log((res));
        
    // }).catch((er)=>{
    //     console.log(er);
        
    // })




    // db.collection('users').deleteMany({
    //     age: 22
    // }).then((res)=>{
    //     console.log(res);
        
    // }).catch((er)=>{
    //     console.log(er);
        
    // })

    // db.collection('tasks').deleteOne({
    //     des: 'first'
    // }).then((res)=>{
    //     console.log(res);
        
    // }).catch((er)=>{
    //     console.log(er);
        
    // })




})

// mongod --dbpath /home/hafeez/mongoData/