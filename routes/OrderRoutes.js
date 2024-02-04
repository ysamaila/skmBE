const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

// router.get("/", sboRatingController.getAllSboRatings);

router.post("/", orderController.addOrder);

// router.get("/:id", sboRatingController.getOneSboRating);

// router.post("/:id", sboRatingController.modifySboRating);

module.exports = router;
