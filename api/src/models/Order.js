const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Cart', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    state:{
        type: DataTypes.STRING,
        set(value){
            this.setDataValue("state", value ? value : "Created");
        }
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false,
    },
  },{
    timestamps: false
  });
};