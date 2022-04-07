const { validationResult } = require('express-validator');
const res = require('express/lib/response');
const bcrypt = require("bcryptjs")
const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { devNull } = require('os');




const usersController = {
    register: (req, res) => {
        return res.render('users/register')
    },
    processRegister: (req, res) =>{
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
    let emailsearch= req.body.emailreg

    db.User.findOne({
        where: {
            email: emailsearch
        },
    }).then(userInDB => {
        if (userInDB){
            return res.render('users/register', {
                errors: {
                    email: {
                        msg: "Este email esta registrado",
                    },
                },
                oldData: req.body,
            });
    }

    db.User.create({
        nombre: req.body.nombre,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })
    return res.redirect('/users/login');
}).catch(function(errors){
    res.json(errors)
})
    },
    login: (req, res) => {

    }
}

module.exports = usersController;