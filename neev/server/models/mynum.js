var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    username: { type: String, require: true },
    contact : {type:String, require:true},
    otp: {type:String, require:true},
    creation_dt:{type:Date, require:true}
});

module.exports = mongoose.model('myNum',schema,'otp');
