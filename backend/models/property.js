const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    title: String,
    rent: Number,
    image: String,
    amenities: String,
    available: Boolean,
    ownerEmail: String
});

module.exports = mongoose.model("Property", propertySchema);