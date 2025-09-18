const Dish = require("../models/Dish");

// GET /dishes
exports.getDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /dishes
exports.addDish = async (req, res) => {
  try {
    const newDish = new Dish(req.body);
    const saved = await newDish.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /dishes/:id
exports.updateDish = async (req, res) => {
  try {
    const updated = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Dish not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /dishes/:id
exports.deleteDish = async (req, res) => {
  try {
    const deleted = await Dish.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Dish not found" });
    res.json({ message: "Dish deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
