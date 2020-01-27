const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');



//get list of ninhas from db
router.get('/ninjas',(req,res)=>{
	Ninja.find({}).then((ninjas)=>{
		res.send(ninjas);
	});

});

//add new ninja to db
router.post('/ninjas',(req,res,next)=>{

	// var ninja = new Ninja(req.body);

	// ninja.save();
	Ninja.create(req.body).then((ninja) =>{
		res.send(ninja);
	}).catch(next)
});

//update ninja in db
router.put('/ninjas/:id',(req,res)=>{
	var id = req.params.id;
	Ninja.findByIdAndUpdate({_id:id},req.body).then(() => {
	Ninja.findOne({_id:id}).then((ninja) => {
		res.send(ninja);
		});
 	
	});
});


//delete ninja from db
router.delete('/ninjas/:id',(req,res)=>{
	var id = req.params.id;
	Ninja.findByIdAndRemove({_id:id}).then((ninja) =>{
		res.send(ninja);
	});
	//res.send({type:'DELETE'});
});

module.exports = router;

