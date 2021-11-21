const express = require("express");
const router = express.Router();
const Avance = require("../esquema/avance");

router.get("/", async (req, res) => {
  const avance = await Avance.find();
  res.json(avance);
});

router.post("/", async (req, res) => {
  const { idProyecto, fecha, descripcion, observacion, idEstudiante, idLider } =
    req.body;
  const avance = new Avance({
    idProyecto,
    fecha,
    descripcion,
    observacion,
    idEstudiante,
    idLider,
  });
  await avance.save();
  res.json({ status: "Avance guardado" });
});

router.put("/:id", async (req, res) => {
  const { idProyecto, fecha, descripcion, observacion, idEstudiante, idLider } =
    req.body;
  const nuevoAvance = {
    idProyecto,
    fecha,
    descripcion,
    observacion,
    idEstudiante,
    idLider,
  };
  await Avance.findByIdAndUpdate(req.params.id, nuevoAvance);
  res.json({ status: "Avance actualizado" });
});

router.delete("/:id", async (req, res) => {
  await Avance.findByIdAndRemove(req.params.id);
  res.json({ status: "Avance eliminado" });
});

router.get("/:id", async (req, res) => {
  const avancexId = await Avance.findById(req.params.id);
  res.json(avancexId);
});

module.exports = router;