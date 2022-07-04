const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Order', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    state:{
      type: DataTypes.ENUM,
      values: ['Created', 'Dispatched', 'Arrived', 'Cancelled'],
      defaultValue: 'Created',
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false,
    },
  },{
    timestamps: true,
    createdAt: true,
    updatedAt: false,
  });
};