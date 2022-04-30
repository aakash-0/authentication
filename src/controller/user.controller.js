const express = require("express");
const router = express.Router();
const User = require("../modules/user.model");

router.post("", async (req,res)=>{
    const newuser =await User.create(req.body);
    return res.status(200).send({user:newuser});
});

module.exports = router;