const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Product', {
    /* id: { 
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    }, */
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
      set(value){
        this.setDataValue("price", "$" + value)
      }
    },
    rating: {
      type: DataTypes.FLOAT,
  
    },
    idcategory:{
      type: DataTypes.STRING,
      
    },
    in_Stock: {
      type: DataTypes.BOOLEAN,
    }
  },{
    timestamps: false
  });
};
