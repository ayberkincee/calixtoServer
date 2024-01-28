console.log("running db.js");

require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, 
DB_DEPLOY_LOCAL, DB_PORT_LOCAL,
//DB_DEPLOY_SFGROUP, DB_PORT_SFGROUP,
//DB_DEPLOY_GBARCO, DB_PORT_GBARCO
} = process.env; 

//===================SELECT FOR OWNER=============
const DB_DEPLOY = DB_DEPLOY_LOCAL;
const DB_PORT = DB_PORT_LOCAL;

// const DB_PORT = DB_PORT_SFGROUP;
// const DB_PORT = DB_PORT_SFGROUP;

// const DB_PORT = DB_PORT_GBARCO;
// const DB_PORT = DB_PORT_GBARCO;
//===============================================

console.log(`connecting to database...`);

//database conection:
const sequelize = new Sequelize(
  //   // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/Calixtotest`,
  // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/Calixto`,
  DB_DEPLOY,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

console.log('defining models...');

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// console.log("modelDefiners");
// console.log(modelDefiners);

// Injectamos la conexion (sequelize) a todos los modelos: 
//crea la instancia de cada modelo y lo incluye en sequelize.models
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// Relaciones de entidades

const {
  Product,
  Provider,
  Category,
  Icon,
  Owner,
  State,
  Portfolio,
  User,
  Client,
  Channel,
} = sequelize.models;

console.log('creating relations...');

//Many to many:
Product.belongsToMany(Icon, { through: "ProdIcon" });
Icon.belongsToMany(Product, { through: "ProdIcon" });

Product.belongsToMany(Channel, {through: "ProdChannel"});
Channel.belongsToMany(Product, {through: "ProdChannel"});

Product.belongsToMany(Portfolio, { through: "ProdPort" });
Portfolio.belongsToMany(Product, { through: "ProdPort" });

User.belongsToMany(Portfolio, { through: "UserPort" });
Portfolio.belongsToMany(User, { through: "UserPort" });

State.belongsToMany(Owner, { through: "OwnerState" });
Owner.belongsToMany(State, { through: "OwnerState" });

//One to many: one provider to many products:
Product.belongsTo(Provider);
Provider.hasMany(Product);

Product.belongsTo(Category);
Category.hasMany(Product);

Product.belongsTo(State);
State.hasMany(Product);

Product.belongsTo(Owner);
Owner.hasMany(Product);

User.belongsTo(Owner);
Owner.hasMany(User);

Client.belongsTo(User);
User.hasMany(Client);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
