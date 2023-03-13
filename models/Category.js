const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // TODO: EXAMPLE OF HOOKS
    // // When adding hooks via the init() method, they go below
    // hooks: {
    //   // Use the beforeCreate hook to work with data before a new instance is created
    //   beforeCreate: async (newUserData) => {
    //     // In this case, we are taking the user's email address, and making all letters lower case before adding it to the database.
    //     newUserData.email = await newUserData.email.toLowerCase();
    //     return newUserData;
    //   },
    //   // Here, we use the beforeUpdate hook to make all of the characters lower case in an updated email address, before updating the database.
    //   beforeUpdate: async (updatedUserData) => {
    //     updatedUserData.email = await updatedUserData.email.toLowerCase();
    //     return updatedUserData;
    //   },
    // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
