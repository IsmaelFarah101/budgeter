'use strict';
module.exports = (sequelize, DataTypes) => {
  const Savings = sequelize.define('Savings', {
    name: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    description: DataTypes.STRING
  }, {});
  Savings.associate = function(models) {
    // associations can be defined here
  };
  Savings.sync({force:false}).then(() => {
    console.log('Savings table synced')
  })
  return Savings;
};