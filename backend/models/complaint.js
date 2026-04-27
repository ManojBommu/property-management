const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    userEmail: String,
    propertyId: String,
    message: String,
    status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Complaint", complaintSchema);