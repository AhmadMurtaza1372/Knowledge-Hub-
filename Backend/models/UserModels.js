const mongoose = require('mongoose');   





const User = mongoose.model('User', {
    username: String,
    email: {type : String , unique: true , required : true},
    password: String,
   


});

module.exports = User;