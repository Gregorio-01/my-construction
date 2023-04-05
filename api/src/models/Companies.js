const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('companies', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgBackground: {
        type: DataTypes.STRING,
        defaultValue:
          "https://myconstruction.com.ar/wp-content/uploads/2019/02/LOGO-512.png",
      },
    imgIcon: {
      type: DataTypes.STRING,
      defaultValue:
        "https://myconstruction.com.ar/wp-content/uploads/2019/02/LOGO-512.png",
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    // items: {
    //     type: DataTypes.ARRAY(DataTypes.JSON),
    //     defaultValue: [],
    //     allowNull: false,
    //     validate: {
    //       notEmpty: true
    //     }
    //   },
  });
};
