const User = require("../model/user.model");

const getUserProfile = async(req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.status(200).json({success:true, message:"Get Profile Successfully", data:user});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Server failed", err});
    }
}
const updateUserProfile = async (req, res) => {
    try{
        const {name, address} = req.body;
        const user = await User.findByIdAndUpdate(req.user.id, { name, address }, { new: true });
        res.status(200).json({success:true, message:"Get Profile Successfully", data:user});
    }   
    catch(err)
    {
        res.status(500).json({success:true, message:"Server failed", err});
    }
}

module.exports = {updateUserProfile, getUserProfile}