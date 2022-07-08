const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      // allowNull: true,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: true,  
          },
    membership: {
      type: DataTypes.ENUM,
      values: ['Basic', 'Subscribed', 'Banned', 'Admin'],
      defaultValue: 'Basic',
    },
    points: {
        type: DataTypes.INTEGER,
    },
    address: {
        type: DataTypes.STRING,
    },
  });
};
