const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Product', {
    id: { 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      set(value){
        let rating = value.toString()
        this.setDataValue("rating", rating.length > 2 ? value = parseFloat(rating.slice(0,3)) : value)
      }
    },
    in_Stock: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },
    // discount: {
    //   type: DataTypes.INTEGER,
    //   defaultValue: 0
    // },
  },{
    timestamps: false
  });
};
