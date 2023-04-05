const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    img: {
      type: DataTypes.STRING,
      defaultValue:
        "https://myconstruction.com.ar/wp-content/uploads/2019/02/LOGO-512.png",
    },
    sales: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    }
  });
};
