const { match } = require("assert");
const User = require("../model/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const registerController = async(req, res) => {
    try{
    const {name, email, password, phone, address } = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser)
    {
        return res.status(400).json({success:true, message:"User already found"});    
    }
    const hashdedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({name, email, password:hashdedPassword, phone, address});
    res.status(200).json({success:true, message:"Register Successfully"});
    }
    catch(err)
    {
    res.status(500).json({success:true, message:"Server failed", err});
    }
}

const loginController = async(req, res) => {
    try{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user)
    {
        return res.status(400).json({ success: false, message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!match){
         return res.status(400).json({ success: false, message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(200).json({success:true, message:"Login Successfully", token, data:user});
    }
    catch(err)
    {
    res.status(500).json({success:true, message:"Server failed", err});
    }
}

const forgotPasswordController = async(req, res) => {
    try{
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user)
    {
        return res.status(400).json({ success: false, message: "Email not registed" });
    }
    user.resetPasswordToken = hash;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();
    const resetURL = `http://localhost:3000/api/auth/reset-password/${resetToken}`;
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
      }
    }); 
    res.status(200).json({success:true, message:"Forgot passoword Successfully"});
    }
    catch(err)
    {
    res.status(500).json({success:true, message:"Server failed", err});
    }
}

const resetPasswordController = async(req, res) => {
    try{
    res.status(200).json({success:true, message:"Reset Password Successfully"});
    }
    catch(err)
    {
    res.status(500).json({success:true, message:"Server failed", err});
    }
}

const logoutController = async(req, res) => {
    try{
    res.status(200).json({success:true, message:"Logout Successfully"});
    }
    catch(err)
    {
    res.status(500).json({success:true, message:"Server failed", err});
    }
} 

module.exports = {registerController, loginController, resetPasswordController, forgotPasswordController, logoutController}