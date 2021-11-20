const express = require("express");
const router = express.Router();
const Proyectos = require("../esquema/proyectos");
const Inscripciones = Proyectos.Inscripciones;

router.get("/", async (req, res) => {
  const proyectos = await Proyectos.find();
  res.json(proyectos);
});

router.get("/:id", async (req, res) => {
  const proyectoxId = await Proyectos.findById(req.params.id);
  res.json(proyectoxId);
});

router.post("/", async (req, res) => {
  const {
    nombre,
    oGenerales,
    oEspecificos,
    presupuesto,
    fechaInicio,
    fechaFin,
    idLider,
    estado,
    fase,
    avance,
    inscripciones,
  } = req.body;
  const proyectos = new Proyectos({
    nombre,
    oGenerales,
    oEspecificos,
    presupuesto,
    fechaInicio,
    fechaFin,
    idLider,
    estado,
    fase,
    avance,
    inscripciones,
  });
  await proyectos.save();
  res.json({ status: "Proyecto guardado" });
});

router.put("/:id", async (req, res) => {
  const {
    nombre,
    oGenerales,
    oEspecificos,
    presupuesto,
    fechaInicio,
    fechaFin,
    idLider,
    estado,
    fase
  } = req.body;
  const nuevoProyecto = {
    nombre,
    oGenerales,
    oEspecificos,
    presupuesto,
    fechaInicio,
    fechaFin,
    idLider,
    estado,
    fase
  };
  await Proyectos.findByIdAndUpdate(req.params.id, nuevoProyecto);
  res.json({ status: "Proyecto actualizado" });
});

router.put("/:id", async (req, res) => {
  const {
    nombre,
    oGenerales,
    oEspecificos,
    presupuesto,
    fechaInicio,
    fechaFin,
    idLider,
    estado,
    fase,
    estudiantes,
    avance,
    inscripciones,
  } = req.body;
  const nuevoProyecto = {
    nombre,
    oGenerales,
    oEspecificos,
    presupuesto,
    fechaInicio,
    fechaFin,
    idLider,
    estado,
    fase,
    estudiantes,
    avance,
    inscripciones,
  };
  await Proyectos.findByIdAndUpdate(req.params.id, nuevoProyecto);
  res.json({ status: "Proyecto actualizado" });
});

router.delete("/:id", async (req, res) => {
  await Proyectos.findByIdAndRemove(req.params.id);
  res.json({ status: "Proyecto eliminado" });
});

router.post("/agregar-inscripcion", async (req, res) => {
  if (req.body._id) {
    Proyectos.updateOne(
      { _id: req.body._id },
      {
        $push: {
          inscripciones: {
            idEstudiante: req.body.idEstudiante,
            estado: req.body.estado,
            fechaIngreso: req.body.fechaIngreso,
            fechaEgreso: req.body.fechaEgreso,
          },
        },
      },
      (error) => {
        if (error) {
          return res.json({
            success: false,
            msj: "No se pudo agregar la inscripcion",
            err,
          });
        } else {
          return res.json({
            success: true,
            msj: "Se agregó correctamente la inscripcion",
          });
        }
      }
    );
  } else {
    return res.json({
      success: false,
      msj: "No se pudo agregar la inscripcion, por favor verifique que el _id del proyecto sea correcto",
    });
  }
});

router.post("/agregar-avance", async (req, res) => {
  if (req.body._id) {
    Proyectos.updateOne(
      { _id: req.body._id },
      {
        $push: {
          avance: {
            fecha: req.body.fecha,
            descripcion: req.body.descripcion,
            observacion: req.body.observacion,
            idEstudiante: req.body.idEstudiante,
            idLider: req.body.idLider,
          },
        },
      },
      (error) => {
        if (error) {
          return res.json({
            success: false,
            msj: "No se pudo agregar el avance",
            err,
          });
        } else {
          return res.json({
            success: true,
            msj: "Se agregó correctamente el avance",
          });
        }
      }
    );
  } else {
    return res.json({
      success: false,
      msj: "No se pudo agregar el avance, por favor verifique que el _id del proyecto sea correcto",
    });
  }
});

module.exports = router;
