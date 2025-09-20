// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");

const supplierRoutes = require("./routes/supplierRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Swagger Docs
const swaggerDocs = require("./swagger");
swaggerDocs(app);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // cần để parse JSON cho API
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/suppliers", supplierRoutes);
app.use("/products", productRoutes);

// Connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
    console.log(`📚 Swagger Docs: http://localhost:${PORT}/api-docs`);
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
