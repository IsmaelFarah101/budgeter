'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bills = sequelize.define('Bills', {
    name: DataTypes.STRING,
    paid: DataTypes.BOOLEAN,
    amount: DataTypes.FLOAT,
    description: DataTypes.STRING
  }, {});
  Bills.associate = function(models) {
    // associations can be defined here
  };
  Bills.sync({force:false}).then(() => {
    console.log('Bills Table Synced')  
  })
  return Bills;
};