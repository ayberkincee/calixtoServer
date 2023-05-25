const { Router } = require("express");
const getProducts = require("../controllers/getProducts");
const postProduct = require("../controllers/postProduct");
const getAllUsers = require("../controllers/getAllUsers");
const getOneUser = require("../controllers/getOneUser");

const router = Router();

//----------------------USER ROUTES-------------------------
router.get("/users", getAllUsers);
router.get("/user/:id", getOneUser);

//---------------------PRODUCT ROUTES---------------------
router.get("/product/:owner", getProducts);
router.post("/product", postProduct);

module.exports = router;
