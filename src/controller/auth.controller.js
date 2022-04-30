const User = require("../modules/user.model");
const jwt= require("jsonwebtoken");
require("dotenv").config();

const newtoken = (user)=>{
    return jwt.sign({user},process.env.SECREAT);
}


const register = async (req,res) =>{
    try {
        let user = await User.findOne({email:req.body.email});

        if(user){
            return res.status(400).send({message : "user or password alresdy present"});
        }
        user = await User.create(req.body);
        var token = newtoken(user);
        return res.status(200).send({user,token});

    } catch (error) {
        return res.status(400).send({message : error.message});
    }
}


const login = async (req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).send({message : "wrong email or password"});
        }
        const match = user.checkPassword(req.body.password);

        if(!match){
            return res.status(400).send({message : "wrong email or password"});
        }
        var token = newtoken(user);
        return res.status(200).send({user,token});

    } catch (error) {
        return res.status(200).send(error);
    }
}


module.exports = {register,login};

