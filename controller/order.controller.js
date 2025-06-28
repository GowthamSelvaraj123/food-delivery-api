const Order = require("../model/order.model");
const Cart = require("../model/cart.model");

const placeOrder = async(req, res) => {
    try{
        const cart = await Cart.findOne({user:req.user.id}).populate("items.food");
        if(!cart || cart.items.lenght ===  0)
        {
            return res.status(400).json({ success: false, message: "Cart is empty" });
        }
        const total = cart.items.reduce((acc, item) => acc + item.food.price * item.quantity , 0);
        const order = await Order.create({user: req.user.id,items: cart.items,total,status: 'pending'});
        await Cart.findByIdAndDelete({user:req.user.id});
        res.status(201).json({ success: true, message:"Ordered Successfully",  cart});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Server failed", err});
    }
}
const getUserOrders = async(req, res) => {
    try{
        const orders = Order.find({ user: req.user.id }).populate("items.food");
        res.status(201).json({ success: true, message:"Get All Ordered Successfully",  cart});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Server failed", err});
    }
}

module.exports = {getUserOrders, placeOrder}