module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false
      },
      usuarios_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'pedidos',
      timestamps: false
    });
    return Pedido;
  };
  