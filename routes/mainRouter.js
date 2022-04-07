const express = require("express"); 
const router = express.Router();
const mainController = require("../controllers/mainController");
const path = require("path");

//ruta main

router.get("/", mainController.index);



module.exports = router;