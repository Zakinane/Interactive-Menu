const express = require("express");
const router = express.Router();
const { getDishes, addDish, updateDish, deleteDish } = require("../controllers/dishController");

router.get("/", getDishes);
router.post("/", addDish);
router.put("/:id", updateDish);
router.delete("/:id", deleteDish);

module.exports = router;
