// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  await Supplier.deleteMany({});
  await Product.deleteMany({});

  const s1 = await Supplier.create({ name: 'ABC Co.', address: 'Hà Nội', phone: '0123456789' });
  const s2 = await Supplier.create({ name: 'XYZ Ltd.', address: 'Hồ Chí Minh', phone: '0987654321' });

  await Product.create({ name: 'Coffee Arabica', price: 5.5, quantity: 100, supplier: s1._id });
  await Product.create({ name: 'Coffee Robusta', price: 4.0, quantity: 200, supplier: s2._id });

  console.log('Seeding done');
  await mongoose.disconnect();
}
seed().catch(err => { console.error(err); process.exit(1); });
