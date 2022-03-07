'use strict';
const {
  Model
} = require('sequelize');
// 库存表： ICInventory 
module.exports = (sequelize, DataTypes) => {
  class ICInventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ICInventory.init({
  //字段名：  STRING-字符串， 数字-FLOAT
    FStockID: DataTypes.STRING, // ....
    FQty: DataTypes.FLOAT,  // 主單位、方量
    FBal: DataTypes.FLOAT,  //  存貨餘量
  }, {
    sequelize,
    modelName: 'ICInventory',
  });
  return ICInventory;
};