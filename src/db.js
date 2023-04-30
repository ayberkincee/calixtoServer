console.log('running db.js');

require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;
const DB_PORT = 5432;

//database conection:
const sequelize = new Sequelize(
  //   // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/Calixtotest`,
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/Calixto`,
  // DB_DEPLOY,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });
  
  console.log("modelDefiners");
  console.log(modelDefiners);

// Injectamos la conexion (sequelize) a todos los modelos: crea la instancia de cada modelo y lo incluye en sequelize.models
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// Relaciones de entidades

const {Product, Provider, Tax, Brand, Category } = sequelize.models;

Product.belongsToMany(Provider, { through: "ProdProve" });
Provider.belongsToMany(Product, { through: "ProdProve" });

Product.belongsTo(Tax);
Tax.hasMany(Product);

Product.belongsTo(Brand);
Brand.hasMany(Product);

Product.belongsTo(Category);
Category.hasMany(Product);

//Creates the intermediate table with the specified table name:

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
