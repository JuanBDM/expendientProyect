const fs = require("fs");
const path = require("path");
const db = require('../database/models');
const Op = db.Sequelize.Op;
const toThousand =  n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const expedientesController = {
  expedientes: (req, res) => {
    db.Expediente.findAll()
      .then(function (expedientes) {
        res.render('expedientes/listaExpedientes', { expedientes: expedientes })
      })
  },

  create: (req, res) => {
    res.render('expedientes/create')
  },

  store: (req, res) => {

    db.Expediente.create({
      numero_expedient: req.body.numero_expedient,
      fecha_inicio: req.body.fecha_inicio,
      tipo_expediente: req.body.tipo_expediente,
      asunto: req.body.asunto,
      proveedor: req.body.proveedor,
      estado: req.body.estado,
      fecha_estado: req.body.fecha_estado,
      monto: req.body.monto
    })

      .then(() => {
        res.redirect("/expedientes/listaexpedientes");
      })
      //.catch(errors => res.send(errors))
  },
  editar: (req, res) => {
    db.Expediente.findByPk(req.params.id)
    .then(function (editarExpediente) {
        res.render("expedientes/editarExpediente", { editarExpediente: editarExpediente})
    })
  },
  update: (req,res) => {
    db.Expediente.update({
      estado: req.body.estado,
      fecha_estado: req.body.fecha_estado,
  }, {
      where: {
          id: req.params.id
      }
  });
  res.redirect("/expedientes/listaExpedientes");
  },
  detalleExpediente: (req, res) => {
    db.Expediente.findByPk(req.params.id)
    .then(function (expedientes) {
      res.render("expedientes/detalleExpediente", {expedientes, toThousand });
    })
    //.catch(errors => res.send(errors))
  },
  delete: (req, res) => {
    db.Expediente.destroy({
      where:{id:req.params.id}
      })
    res.redirect("/expedientes/listaExpedientes");
  }

}

module.exports = expedientesController;