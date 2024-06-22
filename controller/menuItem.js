import MenuItem from "../models/menuItem.js";

const createMenuItem_post = async (req, res) => {
  const item = new MenuItem({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    isAvailable: req.body.isAvailable,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllMenuItems_get = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMenuItemById_get = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMenuItem_put = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    if (item) {
      item.name = req.body.name || item.name;
      item.description = req.body.description || item.description;
      item.price = req.body.price || item.price;
      item.category = req.body.category || item.category;
      item.isAvailable = req.body.isAvailable || item.isAvailable;

      const updatedItem = await item.save();
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteMenuItem_delete = async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndDelete(req.params.id);
    if (item) {
      res.json({ message: "Item deleted" });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createMenuItem_post,
  getAllMenuItems_get,
  getMenuItemById_get,
  updateMenuItem_put,
  deleteMenuItem_delete,
};
