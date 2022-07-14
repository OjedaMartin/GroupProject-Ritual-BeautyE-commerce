require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pghenry`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Product, Category, User, Review,Cart, Order,CartProduct, Wishlist } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Category.hasMany(Product)
Product.belongsTo(Category)

Product.hasMany(Review)
Review.belongsTo(Product)

User.belongsToMany(Review, {through: "User_Review"})
Review.belongsToMany(User, {through: "User_Review"})

User.hasMany(Order)
Order.belongsTo(User)

Cart.hasMany(Order)
Order.belongsTo(Cart)

User.hasMany(Cart)
Cart.belongsTo(User)

Order.belongsToMany(CartProduct, {through: "Product_Order"})
CartProduct.belongsToMany(Order, {through: "Product_Order"})

User.hasOne(Wishlist)
Wishlist.belongsTo(User)

Product.belongsToMany(Wishlist, {through: "Product_Wishlist"})
Wishlist.belongsToMany(Product, {through: "Product_Wishlist"})

/* Cart.belongsToMany(Product, {through: "Product_Cart"})
Product.belongsToMany(Cart, {through: "Product_Cart"}) */



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};