const { Router } = require("express");
//People routes
const getAllOwners = require("../controllers/getAllOwners");
const getAllUsers = require("../controllers/getAllUsers");
const getOneOwner = require("../controllers/getOneOwner");
const getOneUser = require("../controllers/getOneUser");
const getSession = require("../controllers/getSession");
const postOwner = require("../controllers/postOwner");
const updateOwner = require("../controllers/updateOwner");
const postClient = require("../controllers/postClient");
const getClient = require("../controllers/getClient");
const getAllClientsUser = require("../controllers/getAllClientsUser");

//Product routes
const getProdsOwner = require("../controllers/getProdsOwner");
const getProdsUser = require("../controllers/getProdsUser");
const postProduct = require("../controllers/postProduct");
const updateProducts = require("../controllers/updateProducts");
const patchAllProducts = require("../controllers/patchAllProducts");
const bulkcreate = require("../controllers/bulkcreate");
const postState = require("../controllers/postState");
const patchProduct = require("../controllers/patchProduct");
const deleteProduct = require("../controllers/deleteProduct");
const recordSell = require("../controllers/recordSell");
const getOpenSells = require("../controllers/getOpenSells");
const closeSells = require("../controllers/closeSells");
const getProduct = require("../controllers/getProduct");

//other
const test = require("../controllers/test");
const InitLoad = require("../controllers/initLoad");
const updateClient = require("../controllers/updateClient");

const router = Router();

//----------------------PEOPLE ROUTES-------------------------
router.post("/session", getSession);
router.get("/owners", getAllOwners);
//returns an array of owners objects
router.get("/users/:ownerId", getAllUsers);
//returns an array of users objects
router.get("/owner/:id", getOneOwner);
//returns an owner object
router.get("/user/:id", getOneUser);
//returns an user object
router.get("/client/:clientId", getClient);
router.get("/clients/:uId", getAllClientsUser);
router.post("/client", postClient);
router.post("/createowner", postOwner);
router.patch("/updateOwner", updateOwner);
router.patch("/updateClient", updateClient);

//---------------------PRODUCT ROUTES---------------------
router.get("/prodsowner/:owner", getProdsOwner);
//returns an array of product objects
router.get("/prodsuser/:userId", getProdsUser);
//returns an array of product objects
router.get("/product/:productCodigo", getProduct);
router.post("/product", postProduct);
router.post("/bulkcreate", bulkcreate);
router.patch("/product/:id", patchProduct);
router.patch("/updateallproducts", patchAllProducts);
router.delete("/product/:id", deleteProduct);
router.post("/recSell", recordSell);
router.get("/openSells/:userId", getOpenSells);
//trae de bd las open sells
router.post("/closeSells", closeSells);

//-------------------------PROVISIONAL------------------------
router.patch("/updateProducts", updateProducts);
router.get("/test", test);
router.post("/state/:id", postState);
router.get("/initLoad", InitLoad);
module.exports = router;
