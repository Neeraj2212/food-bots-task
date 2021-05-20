const express = require("express");
const router = express.Router();
const data = require("./../public/order_summary.json");

router.get("/user", (req, res) => {
	res.json({ user: data.user });
});

router.get("/order_summary", (req, res) => {
	res.json({
		order: {
			id: data.order_id,
			restaurant: data.restaurant,
			items: data.items,
		},
	});
});

module.exports = router;
