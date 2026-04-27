const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");

router.post("/add", async (req, res) => {
    console.log("Complaint:", req.body); // 🔥 DEBUG

    try {
        const c = new Complaint(req.body);
        await c.save();
        res.json(c);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;