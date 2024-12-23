module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('Producto', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      descripcion: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      categoria: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      img: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      categorias_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'productos',
      timestamps: false
    });
    return Producto;
  };
  