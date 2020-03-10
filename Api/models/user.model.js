const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const users = new Schema ({
    name: { type:String, required:true, unique:true, trim:true },
    pwd: { type:String, required:true },
    email: { type:String, required:false, trim:true, minlenght:5 },
    tel: { type:String, required:false, trim:true },
    active: { type:Boolean, required:true, default:true },
    lvl: { type:Number, required:true }
},{
    collection: "users",
    timestamps: true
});

const Users = mongoose.model('users', users);

module.exports = Users;