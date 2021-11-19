const express = require("express");
const router = express.Router();

const Usuarios = require("../esquema/usuarios");

router.get("/", async (req, res) => {
  const usuarios = await Usuarios.find();
  res.json(usuarios);
});

router.post("/", async (req, res) => {
  const { correo, identificacion, nombre, tipo, password, estado, editBy } =
    req.body;
  const usuarios = new Usuarios({
    correo,
    identificacion,
    nombre,
    tipo,
    password,
    estado,
    editBy,
  });
  await usuarios.save();
  res.json({ status: "Usuario guardado" });
});

router.put("/:id", async (req, res) => {
  const { correo, identificacion, nombre, tipo, password, estado, editBy } =
    req.body;
  const nuevoUsuario = {
    correo,
    identificacion,
    nombre,
    tipo,
    password,
    estado,
    editBy,
  };
  await Usuarios.findByIdAndUpdate(req.params.id, nuevoUsuario);
  res.json({ status: "Usuario actualizado" });
});

router.delete("/:id", async (req, res) => {
  await Usuarios.findByIdAndRemove(req.params.id);
  res.json({ status: "Usuario eliminado" });
});

router.get("/:id", async (req, res) => {
  const usuariosxId = await Usuarios.findById(req.params.id);
  res.json(usuariosxId);
});

module.exports = router;
