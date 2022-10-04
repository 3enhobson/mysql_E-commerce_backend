const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
   //Not sure which ID to use for the column
   product_id: {
    type: DataTypes.INTEGER,
    //not sure how to refrence Product models id
   },
   tag_id: {
    type: DataTypes.INTEGER,
    //not sure how to refrence Tag models id
   }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
