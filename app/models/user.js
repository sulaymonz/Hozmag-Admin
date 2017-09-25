/**
 * Created by sulaymonz on 9/25/17.
 */

// load the stuff we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({
    username : String,
    password : String
});

// methods ==================================
// generating a hash
userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// check if password is valid
userSchema.methods.validPassword = function(password){
    return bcrypt.compare(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
