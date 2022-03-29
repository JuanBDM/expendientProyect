const { validationResult } = require('express-validator');
const res = require('express/lib/response');
const bcrypt = require("bcryptjs")
const fs = require("fs");
const path = require("path");
//const bcrypt = require("bcrypt")



const usersController = {

    register: (req, res) =>{
        res.render("users/register");
    },
    create: (req, res) =>{
    },

    login: (req, res) =>{
        res.render("users/login");
    },
    processLogin: function(req,res) {
        
    }
}

module.exports = usersController;