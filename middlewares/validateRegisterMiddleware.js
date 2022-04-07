const path = require('path')
const { body } = require('express-validator');

module.exports = [
    body('nombre').notEmpty().withMessage('Debe escribir un nombre'),
    body('email').notEmpty().withMessage('Tiene que escribir un corre').bail().isEmail()
    .withMessage('Debe escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Tiene que escribir una contraseña')
]