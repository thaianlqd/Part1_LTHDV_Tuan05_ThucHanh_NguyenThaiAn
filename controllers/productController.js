const Product = require("../models/Product");
const Supplier = require("../models/Supplier");

// List
exports.index = async (req, res) => {
  const products = await Product.find().populate("supplier");
  res.render("products/index", { products });
};

// New form
exports.newForm = async (req, res) => {
  const suppliers = await Supplier.find();
  res.render("products/new", { suppliers });
};

// Create
exports.create = async (req, res) => {
  await Product.create(req.body);
  res.redirect("/products");
};

// Edit form
exports.editForm = async (req, res) => {
  const product = await Product.findById(req.params.id);
  const suppliers = await Supplier.find();
  res.render("products/edit", { product, suppliers });
};

// Update
exports.update = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/products");
};

// Delete
exports.delete = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
};
