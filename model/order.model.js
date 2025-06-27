const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  items: [
    {
      menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
      quantity: Number
    }
  ],
  totalAmount: Number,
  status: { 
    type: String, 
    enum: ['placed', 'preparing', 'out for delivery', 'delivered', 'cancelled'], 
    default: 'placed' 
  },
  paymentMode: { type: String, enum: ['COD', 'Online'], default: 'COD' },
  deliveryAddress: String,
  placedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);