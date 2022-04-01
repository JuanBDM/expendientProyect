const express = require("express")
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { check, validationResult, body} = require('express-validator');
const usersController = require("../controllers/usersController");

//MIddlewares


//Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './public/images/usersimages')
    },
    filename: (req, file, cb) => {
        const newFileName = 'userimage ' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

const uploadFile = multer({ storage });


//Login
router.get('/login', usersController.login);

//Process login
router.post('/login', usersController.processLogin);

//Formulario registro
router.get('/register', usersController.register);

//Proceso de formulario
router.post('/register', /*registerValidations*/ uploadFile.single('userImage'),  usersController.create);


 
module.exports = router;