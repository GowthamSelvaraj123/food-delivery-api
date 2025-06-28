const Menu = require("../model/menuitem.model");

const addMenuItem = async(req, res) => {
    try{
        const menu = await Menu.create(req.body);
        res.status(201).json({ success: true, message:"Menu Added Successfully",  menu});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Server failed", err});
    }
}

const getMenuByRestaurant = async(req, res) => {
    try
    {
        const menu = await Food.find({ restaurant: req.params.restaurantId })
        res.status(201).json({ success: true, message:"Get Menu Successfully",  menu});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Server failed", err});
    }
}

module.exports = {addMenuItem, getMenuByRestaurant}