const router = require("express").Router();
const Property = require("../models/property");

router.post("/add", async (req,res)=>{
    try{
        const p = new Property(req.body);
        await p.save();
        res.json(p);
    }catch(err){
        res.status(500).json("Error adding property");
    }
});

router.get("/all", async (req,res)=>{
    try{
        const data = await Property.find();
        res.json(data);
    }catch(err){
        res.status(500).json("Error fetching data");
    }
});

router.delete("/delete/:id", async (req,res)=>{
    try{
        await Property.findByIdAndDelete(req.params.id);
        res.json("Deleted");
    }catch(err){
        res.status(500).json("Error deleting");
    }
});

module.exports = router;
