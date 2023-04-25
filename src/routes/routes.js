const { Router } = require("express");
const getProducts = require("../controllers/getProducts");

const router = Router();

router.get("/product", getProducts);

module.exports = router;
