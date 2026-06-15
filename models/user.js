const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default; // ✅

console.log(typeof passportLocalMongoose); // should print "function"
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },

});
    



UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",UserSchema);