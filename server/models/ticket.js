const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    user:{type:String},
    email:{type:String},
    answer:{type:String},
    created:{type:Date, default:Date.now}
})

const ticketSchema = new Schema({
    name:{type:String},
    email:{type:String},
    title:{type:String},
    detail:{type:String},
    status:{type:Boolean, default:true},
    answer:[answerSchema],
    created:{type:Date, default:Date.now}
    
})

module.exports =  mongoose.model('Ticket', ticketSchema)