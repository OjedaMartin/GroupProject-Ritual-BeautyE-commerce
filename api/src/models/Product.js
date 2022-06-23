const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Product', {
    id: { 
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     
    brand:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
  
    },
    in_Stock: {
      type: DataTypes.BOOLEAN,
      set(value){
        this.setDataValue("in_Stock", value ? value : true)
      }
    }
  },{
    timestamps: false
  });
};
