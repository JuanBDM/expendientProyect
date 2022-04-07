const express = require('express')
const router = express.Router();
const path = require('path');
const expedientesController = require("../controllers/expedientesController");



//middlewares
const validacionFormExp = require('../middlewares/validateExpForm')

// all files
router.get('/listaExpedientes', expedientesController.expedientes)

//Register expediente
router.get('/create',  expedientesController.create);
router.post("/create", validacionFormExp, expedientesController.store );


//editar expediente
router.get('/edit/:id', expedientesController.editar);
//actualizar expediente
router.patch('/edit/:id', expedientesController.update);

// detail
router.get('/detalle/:id', expedientesController.detalleExpediente);

//borrar
//Delete
router.delete('/delete/:id', expedientesController.delete); //adminMiddleware,

module.exports = router;