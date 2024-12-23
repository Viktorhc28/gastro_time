module.exports = (sequelize, DataTypes) => {
    const DetallePedido = sequelize.define('DetallePedido', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      pedidos_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      productos_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'detalle_pedido',
      timestamps: false
    });
    return DetallePedido;
  };
  