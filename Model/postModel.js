// here we will create schema and model for the Posts

const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    name : String,
    title : String,
    description : String,
    Date : Date
})

const postModel = mongoose.model("post",postSchema)

module.exports ={
    postModel
}