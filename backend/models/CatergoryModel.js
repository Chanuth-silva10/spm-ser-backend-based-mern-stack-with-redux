/** @format */

const mongoose = require("mongoose");

const catergorySchema = new mongoose.Schema(
  {
    catergoryName: {
      type: String,
      required: [true, "Please Enter Catergory Name"],
    },

    catergoryId: {
      type: String,
      required: [true, "Please Enter Catergory ID"],
    },

    catergoryDescripition: {
      type: String,
      required: [true, "Please Enter Catergory Descripition"],
    },

    catergoryImage: {
      type: String,
    },

    productsInCatergory: {
      type: [],
    },
  },
  {
    timeStamp: true,
  }
);
