const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* REGISTER */
router.post("/register", async (req, res) => {
    try {
        const name = req.body.name?.trim();
        const email = req.body.email?.trim().toLowerCase();
        const password = req.body.password?.trim();

        if (!name || !email || !password) {
            return res.status(400).json("All fields required");
        }

        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json("User already exists");
        }

        const user = new User({ name, email, password });
        await user.save();

        res.json({ message: "Registered successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json("Server error");
    }
});

/* LOGIN */
router.post("/login", async (req, res) => {
    try {
        const email = req.body.email?.trim().toLowerCase();
        const password = req.body.password?.trim();

        if (!email || !password) {
            return res.status(400).json("Enter email & password");
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json("User not registered");
        }

        if (user.password !== password) {
            return res.status(400).json("Wrong password");
        }

        res.json(user);

    } catch (err) {
        console.log(err);
        res.status(500).json("Server error");
    }
});

module.exports = router;