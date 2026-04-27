const router = require("express").Router();
const Property = require("../models/Property");

/* ADD */
router.post("/add", async (req,res)=>{
    const p = new Property(req.body);
    await p.save();
    res.json(p);
});

/* GET ALL */
router.get("/all", async (req,res)=>{
    const data = await Property.find();
    res.json(data);
});

/* DELETE */
router.delete("/delete/:id", async (req,res)=>{
    await Property.findByIdAndDelete(req.params.id);
    res.json("Deleted");
});

module.exports = router;