const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING,
      
    },
    email:{
        type: DataTypes.STRING,
        
    },
    membership: {
      type: DataTypes.ENUM,
      values: ['Basic', 'Subscribed', 'Banned', 'Admin'],
      defaultValue: 'Basic',
    },
    address: {
        type: DataTypes.STRING,
    },
    image:{
        type: DataTypes.STRING
    },
    subscribed:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  });
};
