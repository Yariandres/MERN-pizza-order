const express = require('express');
const router = express.Router();

// @route  GET api/products
// @desc   get products
// @access Public

const Products = require('../../models/Products');

router.get('/', async (req, res) => {
  const products = await Products.find({});
  res.json({ products });
});


module.exports = router;