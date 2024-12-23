module.exports = (db) => {
    // Asociación Usuario - Pedido (1:N)
    db.Usuario.hasMany(db.Pedido, {
      foreignKey: 'usuarios_id'
    });
    db.Pedido.belongsTo(db.Usuario, {
      foreignKey: 'usuarios_id'
    });
  
    // Asociación Pedido - Pago (1:1)
    db.Pedido.hasOne(db.Pago, {
      foreignKey: 'pedidos_id'
    });
    db.Pago.belongsTo(db.Pedido, {
      foreignKey: 'pedidos_id'
    });
  
    // Asociación Pedido - DetallePedido (1:N)
    db.Pedido.hasMany(db.DetallePedido, {
      foreignKey: 'pedidos_id'
    });
    db.DetallePedido.belongsTo(db.Pedido, {
      foreignKey: 'pedidos_id'
    });
  
    // Asociación Producto - DetallePedido (1:N)
    db.Producto.hasMany(db.DetallePedido, {
      foreignKey: 'productos_id'
    });
    db.DetallePedido.belongsTo(db.Producto, {
      foreignKey: 'productos_id'
    });
  
    // Asociación Producto - Categoría (N:1)
    db.Producto.belongsTo(db.Categoria, {
      foreignKey: 'categorias_id'
    });
    db.Categoria.hasMany(db.Producto, {
      foreignKey: 'categorias_id'
    });
  };
  