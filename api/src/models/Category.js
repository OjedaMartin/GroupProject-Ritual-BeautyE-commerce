const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Category', {
    
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    fromAPI:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },{
    timestamps: false
  });
};
