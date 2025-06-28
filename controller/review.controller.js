const Review = require("../model/review.model")

const addReview = async(req, res) => {
    try{
        const { foodId, rating, comment } = req.body;
        const review = await Review.create({ user: req.user.id, food: foodId, rating, comment });
        res.status(200).json({success:true, message:"Added Review Successfully", data:user});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Server failed", err});
    }
}
const getReviewsForFood = async(req, res) => {
    try{
        const reviews = await Review.find({ food: req.params.foodId }).populate("user", "name");
        res.status(500).json({success:true, message:"get Revews successfully", reviews});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Server failed", err});
    }
}