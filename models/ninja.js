const mongoose = require('mongoose'); //importing mongoose
const Schema = mongoose.Schema; // using mongodb schema

//create Belt schema
const BeltSchema = new Schema({

	type:{
		default:'White', //White or Black.
		type:"String"
	}
});

//create ninja schema and model
const NinjaSchema = new Schema({
	name:{
		type:String,
		required:[true,'Name field is required']
	},
	rank:{
		type:Number, // 1 2 or 3
	},
	available:{
		type: Boolean,
		default:false
	},
	Belt: BeltSchema

});

//ninja model
const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;



