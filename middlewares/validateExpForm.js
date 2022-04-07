const { body } = require('express-validator');

module.exports = [
    body('numero_expedient').notEmpty().withMessage('Debe completar este campo')
    .isLength({max: 4}).withMessage('Debe tener 4 digitos').isLength({min: 3}).withMessage('Debe tener 4 digitos') .isNumeric().withMessage('Solo se aceptan numeros'),
    body('fecha_inicio').notEmpty().withMessage('Debe elegir una fecha'),
    body('tipo_expediente').notEmpty().withMessage('Debe seleccionar un tipo'),
    body('asunto').notEmpty().withMessage('Debe escribir un asunto'),
    body('proveedor').notEmpty().withMessage('Debe escribir el proveedor'),
    body('estado').notEmpty().withMessage('Debe seleccionar un estado'),
    body('fecha_estado').notEmpty().withMessage('Debe seleccionar la fecha de estado'),
    body('monto').notEmpty().withMessage('Escriba el monto requerido').isNumeric().withMessage('Solo se aceptan valores numericos')
]