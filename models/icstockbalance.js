'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Icstockbill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Icstockbill.init({
    FSupplyID: DataTypes.STRING,
    FFetchAdd: DataTypes.STRING,
    FHeadSelfB0154: DataTypes.STRING,
    FSupplyID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Icstockbill',
  });
  return Icstockbill;
};