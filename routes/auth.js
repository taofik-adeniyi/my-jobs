const express = require("express");

const router = express.Router();

const { login, register } = require("../controllers/auth");

router.route("/login").post(login);
router.route("/register").post(register);

module.exports = router;

// router.route("/").get(getAllProducts);
// router.route("/static").get(getAllProductsStatic);

// module.exports = router;
