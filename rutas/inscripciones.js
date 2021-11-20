const express = require("express");
const router = express.Router();

const Inscripciones = require("../esquema/inscripciones");

router.get("/", async (req, res) => {
  const inscripciones = await Inscripciones.find();
  res.json(inscripciones);
});

router.post("/", async (req, res) => {
  const { idProyecto, idEstudiante, estado, fechaIngreso, fechaEgreso } =
    req.body;
  const inscripciones = new Inscripciones({
    idProyecto,
    idEstudiante,
    estado,
    fechaIngreso,
    fechaEgreso,
  });
  await inscripciones.save();
  res.json({ status: "Inscripcion guardada" });
});

router.put("/:id", async (req, res) => {
  const { idProyecto, idEstudiante, estado, fechaIngreso, fechaEgreso } =
    req.body;
  const nuevaInscripcion = {
    idProyecto,
    idEstudiante,
    estado,
    fechaIngreso,
    fechaEgreso,
  };
  await Inscripciones.findByIdAndUpdate(req.params.id, nuevaInscripcion);
  res.json({ status: "Inscripcion actualizada" });
});

router.delete("/:id", async (req, res) => {
  await Inscripciones.findByIdAndRemove(req.params.id);
  res.json({ status: "Inscripcion eliminada" });
});

router.get("/:id", async (req, res) => {
  const inscripcionesxId = await Inscripciones.findById(req.params.id);
  res.json(inscripcionesxId);
});

module.exports = router;
