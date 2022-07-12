const { Router } = require('express');
const {getWishlist} = require("./controllers/wishlist/getWishlist");
const {addProduct} = require("./controllers/wishlist/addProduct");
const {removeProduct} = require("./controllers/wishlist/removeProduct");

const router = Router()

router.get("/:userId", getWishlist);
router.post("/add", addProduct);
router.put("/remove", removeProduct);

module.exports= router