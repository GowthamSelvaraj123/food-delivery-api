const Cart = require("../model/cart.model")

const addToCart = async (req, res) => {
    try {
        const { foodId, quantity } = req.body;
        let cart = await Cart.findOne({ user: req.user.id });
        if (!cart) {
            cart = await Cart.create({ user: req.user.id, items: [] });
        }
        const index = Cart.items.findIndex(i => i.food.toString() === foodId);
        if (index >= 0) {
            cart.items[index].quantity += quantity;
        } else {
            cart.items.push({ food: foodId, quantity });
        }
        await cart.save();
        res.status(201).json({ success: true, message:"Cart Added Successfully",  cart});
    }
    catch (err) {
        res.status(500).json({success:true, message:"Server failed", err});
    }
}
const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({user:req.user.id}).populate("items.food");
        res.status(201).json({ success: true, message:"Get Cart Successfully",  cart});
    }
    catch (err) {
        res.status(500).json({success:true, message:"Server failed", err});
    }
}
const clearCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete({user:req.user.id});
        res.status(201).json({ success: true, message:"Deleted Cart Successfully"});
    }
    catch (err) {
        res.status(500).json({success:true, message:"Server failed", err});
    }
}

module.exports = {clearCart, addToCart, getCart}