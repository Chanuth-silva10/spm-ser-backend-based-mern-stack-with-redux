/** @format */

const Catergory = require("../models/CategoryModel"); //importing the model class created
const catchAsyncErrors = require("../middleware/catchAsyncErrors"); //importing middleware to avoid the server stoping
const ErrorHandler = require("../utils/ErrorHandler"); //importing error handlers

//add catergory
exports.addCatergory = catchAsyncErrors(async (req, res) => {
  const {
    catergoryName,
    catergoryId,
    catergoryDescripition,
    catergoryImage,
    productsInCatergory,
  } = req.body;

  const catergory = await Catergory.create({
    catergoryName,
    catergoryId,
    catergoryDescripition,
    catergoryImage,
    productsInCatergory,
  });

  res.status(200).json({ success: true, catergory });
});

//get category
exports.getCatergory = catchAsyncErrors(async(req,res) => {
  const catergory = await Catergory.find()
  res.status(200).json({ success:true, catergory});
})