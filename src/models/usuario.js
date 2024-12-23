module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    rol: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'usuarios',
    timestamps: false
  });
  return Usuario;
};
