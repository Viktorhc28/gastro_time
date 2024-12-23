module.exports = (sequelize, DataTypes) => {
    const Pago = sequelize.define('Pago', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      monto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      metodo_pago: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false
      },
      pedidos_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'pagos',
      timestamps: false
    });
    return Pago;
  };
  