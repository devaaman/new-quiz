import mongoose from "mongoose";
const { Schema } = mongoose;
// import schema object from mongoose to create schema

/** result model */
const resultModel = new Schema({
    username : { type : String },
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})

export default mongoose.model('result', resultModel);