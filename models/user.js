const mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose")

const Schema = mongoose.Schema;

const bcrypt = require("bcrypt"),
    SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
    username:String,
    password:String
});


UserSchema.pre('save', function(next) {
    let user = this;
  
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
  
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
  
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
  
            // set the hashed password back on our business document
            user.password = hash;
            next();
          });
        });
      });
  
  UserSchema.methods.comparePassword = function(candidatePassword) {
   return bcrypt.compareSync(candidatePassword, this.password);
       
  } 


UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", UserSchema);

module.exports = User;
