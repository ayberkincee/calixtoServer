const { Router } = require("express");
const getProducts = require("../controllers/getProducts");
const postProduct = require("../controllers/postProduct");
const getAllUsers = require("../controllers/getAllUsers");

const router = Router();

//----------------------USER ROUTES-------------------------
router.get("/users", getAllUsers);

//---------------------PRODUCT ROUTES---------------------
router.get("/product/:owner", getProducts);
router.post("/product", postProduct)


module.exports = router;
