const Restaurant = require("../model/restaurant.model");

const createRestaurant = async(req, res) => {
    try{
        const restaurant = Restaurant.create(req.body)
        res.status(201).json({ success: true, message:"Restaurant Created Successfully",  restaurant });
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Server failed", err});
    }
}

const getAllRestaurant = async(req, res) =>{
    try{
        const restaurant = await Restaurant.find();
        res.status(201).json({ success: true, message:"Get Restaurant Successfully",  restaurant });
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Server failed", err});
    }
}
const getRestaurantById = async(req, res) =>{
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        res.status(201).json({ success: true, message:"Get Restaurant Successfully",  restaurant });
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Server failed", err});
    }
    
}

module.exports = {getAllRestaurant, getRestaurantById, createRestaurant}