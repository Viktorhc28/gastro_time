const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Importar modelos
db.Usuario = require('./usuario')(sequelize, DataTypes);
db.Pedido = require('./pedido')(sequelize, DataTypes);
db.Pago = require('./pago')(sequelize, DataTypes);
db.DetallePedido = require('./detalle_pedido')(sequelize, DataTypes);
db.Producto = require('./producto')(sequelize, DataTypes);
db.Categoria = require('./categoria')(sequelize, DataTypes);

// Cargar asociaciones
require('./associations')(db);

module.exports = db;
