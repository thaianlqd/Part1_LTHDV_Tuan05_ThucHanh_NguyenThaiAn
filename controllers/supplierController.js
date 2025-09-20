const Supplier = require("../models/Supplier");

// List
exports.index = async (req, res) => {
  const suppliers = await Supplier.find();
  res.render("suppliers/index", { suppliers });
};

// New form
exports.newForm = (req, res) => {
  res.render("suppliers/new");
};

// Create
exports.create = async (req, res) => {
  await Supplier.create(req.body);
  res.redirect("/suppliers");
};

// Edit form
exports.editForm = async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  res.render("suppliers/edit", { supplier });
};

// Update
exports.update = async (req, res) => {
  await Supplier.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/suppliers");
};

// Delete
exports.delete = async (req, res) => {
  await Supplier.findByIdAndDelete(req.params.id);
  res.redirect("/suppliers");
};
