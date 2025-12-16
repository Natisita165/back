const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    producto: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    cantidad: { type: Number, required: true, min: 0 },
    precio: { type: Number, required: true, min: 0 },
    descuento: { type: Number, required: true, min: 0 },
    total: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);