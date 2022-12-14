const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    taskName :{type : String, required : true},
    description : String,
    isCompleted : Boolean
})

const todo = new mongoose.model("todo",todoSchema);
module.exports = todo