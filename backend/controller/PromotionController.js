const Promotion = require('../models/PromotionModel.js')

exports.createpromo = async(req,res)=>{
    const newpromotion = new Promotion({
        ID:req.body.promoid,
        Name:req.body.name,
        OtherNotes:req.body.othernotes,
        Type:req.body.type,
        Discount:req.body.discount,
        Conditions:req.body.conditions
    })

    await newpromotion
    .save(newpromotion)
    .then(res.send({message:'Success'}))
    .catch(err=>{res.send(err)})
}

exports.updatepromo = async(req,res)=>{
    let id = req.params.id
    await Promotion.findByIdAndUpdate(id,req.body)
    .then(res.send({message:'Success'}))
}

exports.deletepromo = async(req,res)=>{
    let id = req.params.id
    console.log(id)
    await Promotion.findByIdAndDelete(id)
    .then(res.send({message:'Success'}))
}

exports.findallpromo = async(req,res)=>{
 await Promotion.find().then(data=>{
    res.send(data)
 })
}

exports.findonepromo = async(req,res)=>{

}

exports.filterpromo = async(req,res)=>{

}

function validateinput(values){
    let ID = values.promoid
    let Name = values.name
    let OtherNotes = values.othernotes
    let Type = values.type
    let Discount = values.discount
    let Conditions = values.conditions
}