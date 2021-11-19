const express = require("express");
const router = express.Router();

const Proyectos = require("../esquema/proyectos");

router.get("/", async (req, res) => {
  const proyectos = await Proyectos.find();
  res.json(proyectos);
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
    estudiantes,
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
    estudiantes,
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
    fase,
    estudiantes,
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
  };
  await Proyectos.findByIdAndUpdate(req.params.id, nuevoProyecto);
  res.json({ status: "Proyecto actualizado" });
});

router.delete("/:id", async (req, res) => {
  await Proyectos.findByIdAndRemove(req.params.id);
  res.json({ status: "Proyecto eliminado" });
});

router.get("/:id", async (req, res) => {
  const proyectoxId = await Proyectos.findById(req.params.id);
  res.json(proyectoxId);
});

module.exports = router;
