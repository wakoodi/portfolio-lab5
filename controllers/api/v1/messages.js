const mongoose = require('mongoose')
const Schema = mongoose.Schema
const messageSchema = new Schema({
    message: String,
    user: String
})
const Message = mongoose.model('Message', messageSchema)

const getAll = (req, res) =>{
    Message.find({}, (err, doc) =>{
        if(!err){
            res.json({
                "status" : "success",
                "data" : {
                    "message": doc
                }
            })
        }
    })
    
    
}

const getOne = (req, res) =>{
    Message.find({_id: req.params.id}, (err, doc) =>{
        if(!err){
            res.json({
                "status" : "success",
                "data" : {
                    "message": doc
                }
            })
        }
    })
    
}

const getOneByUser = (req, res) =>{
    Message.find({user: req.params.user}, (err, doc) =>{
        if(!err){
            res.json({
                "status" : "success",
                "data" : {
                    "message": doc
                }
            })
        }
    })
    
}

const createOne =  (req, res) => {
    let message = new Message()
    message.message = "nodejs isn’t hard, or is it?" 
    message.user = "Pikachu"
    message.save( (err, doc) =>{
        if(!err){
            res.json({
                "status" : "success",
                "data" : {
                    "message": doc
                }
            })
        }
    })
    
}

const updateOne = (req, res) => {
    Message.findByIdAndUpdate({_id: req.params.id}, (err, doc) => {
        if(!err){
            res.json({
                "status" : "success",
                "data" : {
                    "message": `Updated message with id: .${req.params.id}`
                }
            })
        }
    })
}

const removeOne = (req, res) => {
    Message.findByIdAndDelete({_id: req.params.id}, (err, doc) => {
        if(!err){
            res.json({
                "status" : "success",
                "data" : {
                    "message": "The message was removed"
                }
            })
        }
    })
}

module.exports.getAll = getAll
module.exports.getOne = getOne
module.exports.getOneByUser = getOneByUser
module.exports.createOne = createOne
module.exports.updateOne = updateOne
module.exports.removeOne = removeOne