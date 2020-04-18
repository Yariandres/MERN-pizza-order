const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema ({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  photo: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('products', ProductSchema);
