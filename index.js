const express = require('express'); //Express is a framework for building web applications on top of Node. js. It simplifies the server creation process that is already available in Node
const routes = require('./routes/api'); 
const bodyParser = require('body-parser');//body-parser extracts the entire body portion of an incoming request stream and exposes it on req. body
const mongoose = require('mongoose');  //I

//set up axpress app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://asif:lll123@cluster0-shard-00-00-kmcms.mongodb.net:27017,cluster0-shard-00-01-kmcms.mongodb.net:27017,cluster0-shard-00-02-kmcms.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'); // using mongoDB.

mongoose.Promise = global.Promise; // required for mongoDB.

app.use(bodyParser.json()); //using body parser

app.use('/api',routes); // using the created routes

app.use((err,req,res,next)=>{
	res.status(422).send({error:err.message});

});

//get request used to send data to client
 //app is listening at roor level (localhost:4000/), then call back fucntion to respond.
// app.get('/senddata',(req,res) => {
// 	console.log('get request');
// 	res.send({name:'Asif'}); //send data to client
// });



//listen for requests
app.listen(process.env.port||4000,() => {
	console.log('Listening for requests');
});



