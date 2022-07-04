const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('CartProduct', {
    
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },

      cartId:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      productId:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity:{
        type: DataTypes.INTEGER,
        defaultValue: 1
      }
    },{
      timestamps: false
    });
  };