// controllers/menuController.js

const MenuItem = require('../models/itemsModel'); // Adjust the path according to your project structure

const createMenuItem = async (req, res) => {
  try {
    const menuItem = new MenuItem(req.body);
    await menuItem.save();
    res.status(201).send(menuItem);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).send(menuItems);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getMenuItemById = async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) {
      return res.status(404).send();
    }
    res.status(200).send(menuItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!menuItem) {
      return res.status(404).send();
    }
    res.status(200).send(menuItem);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!menuItem) {
      return res.status(404).send();
    }
    res.status(200).send(menuItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createMenuItem,
  getAllMenuItems,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem,
};
