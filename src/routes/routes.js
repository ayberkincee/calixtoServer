const { Router } = require("express");
const getProdsOwner = require("../controllers/getProdsOwner");
const getProdsUser = require("../controllers/getProdsUser");
const postProduct = require("../controllers/postProduct");
const getAllOwners = require("../controllers/getAllOwners");
const getOneOwner = require("../controllers/getOneOwner");
const loadDb = require("../controllers/loadDb");

const router = Router();

//----------------------USER ROUTES-------------------------
router.get("/owners", getAllOwners);
router.get("/owner/:id", getOneOwner);
router.post("/load", loadDb);

//---------------------PRODUCT ROUTES---------------------
router.get("/prodsowner/:owner", getProdsOwner);
router.get("/prodsuser/:user", getProdsUser);
router.post("/product", postProduct);

module.exports = router;
