const router = require("express").Router();
const {validator,loginRules,registerRules}=require("../middelwares/bodyValidator");
const bcrypt=require("bcrypt");
const jwt= require("jsonwebtoken")
const User = require("../models/User");
const isAuth = require("../middelwares/isAuth")


router.post("/register",registerRules(),validator, async (req,res)=>{
    const{name, lastName, email, password}= req.body;
    try {
        //find if user already exists
        let user = await User.findOne({email})
        if(user){
            return res.status(400).send({Msg: "User Already exists"})
        }

        //create a new user
        user=new User ({
            name,
            lastName,
            email,
            password
        });

        //hash the password
        const salt=10;
        const hashedPassword= await bcrypt.hash(password,salt);
        user.password=hashedPassword;
        //save the user
        await user.save();
        //sign the user
        const payload={
            _id:user._id,
        };
        const token= await jwt.sign(payload,process.env.secretOrKey )
        res.status(200).send({Msg: "Login success",user:convertUser(user),token});
    } catch (error) {
        res.status(500).send({Msg:"server error"})
    }
});

router.post("/login",loginRules(),validator,async(req,res)=>{
    const {email,password} = req.body
    try {
      const user= await User.findOne({email}) 
      if(!user){
          return res.status(400).send({Msg:"bad Credentials"})
      } 
      const isMatch= await bcrypt.compare(password,user.password)
     if (!isMatch){
         return res.status(400).send({Msg:"bad Credentials"})
     }
     
     //sign the user

     const payload={
         _id:user._id,
     };
     const token= await jwt.sign(payload,process.env.secretOrKey )
     res.send({Msg: "login success",user,token});
    } catch (error) {
        res.status(500).send({Msg:"server error"}) 
    }
});


router.get("/me" ,isAuth , (req,res)=>{
res.status(200).send({user : req.user});
    });

module.exports = router;

const convertUser = ({ name, lastName, email, _id }) => ({
    name,
    lastName,
    email,
    _id,
  });