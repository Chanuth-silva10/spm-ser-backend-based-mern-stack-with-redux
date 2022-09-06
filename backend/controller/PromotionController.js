const Promotion = require('../models/PromotionModel.js')

exports.createpromo = async(req,res)=>{
    let validation = validateinput(req.body)
    if(validation){
        return res.send({message:validation})
    }
    let on = req.body.othernotes
    if(!req.body.othernotes){
        on = 'none'
    }

    const newpromotion = new Promotion({
        ID:req.body.promoid,
        Name:req.body.name,
        OtherNotes:on,
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

exports.updatepromostatus = async(req,res) =>{
    let id = req.params.id
    let status = req.params.status
    await Promotion.updateOne({_id:id},{$set:{Status:status}})
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

exports.filterpromobystatus = async(req,res)=>{
    let status = req.params.status
    await Promotion.find({Status:status}).then(data=>{
    res.send(data)})
}
exports.filterpromobytype = async(req,res)=>{
    let type = req.params.type
    await Promotion.find({Type:type}).then(data=>{
    res.send(data)})
}
exports.filterpromobyboth = async(req,res)=>{
    let status = req.params.status
    let type = req.params.type
    await Promotion.find({Status:status,Type:type}).then(data=>{
    res.send(data)})
}

function validateinput(values){
    const IDpattern = /^[a-zA-Z0-9]{0,6}$/
    const Namepattern = /^[a-zA-Z\s]{0,20}$/
    const Discountpattern = /^[0-9]+%{0,3}$/
    const Conditionspattern = /^[a-zA-Z0-9\s]+$/

    let ID = values.promoid
    let Name = values.name
    let Type = values.type
    let Discount = values.discount
    let Conditions = values.conditions

    if(!ID){
        return 'ID value can not be null'
    }
    if(!Name){
        return 'Name value can not be null'
    }
    if(!Type){
        return 'Type value can not be null'
    }
    if(!Discount){
        return 'Discount value can not be null'
    }
    if(!Conditions){
        return 'Conditions value can not be null'
    }
    if(!IDpattern.test(ID)){
        return 'ID can only contain letters and numbers up to 6 characters'
    }
    if(!Namepattern.test(Name)){
        return 'Name can only contain letters upto 20 characters'
    }
    if(!Discountpattern.test(Discount)){
        return 'Discount can only contain valid percentage value'
    }
    if(!Conditionspattern.test(Conditions)){
        return 'Conditions can only contain letters and numbers'
    }
}