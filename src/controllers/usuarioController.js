// controllers/usuarioController.js
const db = require('../models');
const Usuario = db.Usuario;

exports.getAllUsuarios = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
};

exports.getUsuarioById = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  usuario ? res.json(usuario) : res.status(404).send('Usuario no encontrado');
};

exports.createUsuario = async (req, res) => {
  const usuario = await Usuario.create(req.body);
  res.status(201).json(usuario);
};

exports.updateUsuario = async (req, res) => {
  const [updated] = await Usuario.update(req.body, {
    where: { id: req.params.id }
  });
  updated ? res.send('Usuario actualizado') : res.status(404).send('Usuario no encontrado');
};

exports.deleteUsuario = async (req, res) => {
  const deleted = await Usuario.destroy({ where: { id: req.params.id } });
  deleted ? res.send('Usuario eliminado') : res.status(404).send('Usuario no encontrado');
};