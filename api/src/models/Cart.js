const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Cart', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    prod:{
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity:{
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    state:{
      type: DataTypes.STRING,
      defaultValue: "Active",
    }
  },{
    timestamps: false
  });
};
