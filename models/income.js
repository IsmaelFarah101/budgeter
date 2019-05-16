'use strict';
module.exports = (sequelize, DataTypes) => {
  const Income = sequelize.define('Income', {
    name: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    description: DataTypes.STRING,
    from: DataTypes.STRING
  }, {});
  Income.associate = function(models) {
    // associations can be defined here
  };
  Income.sync({force:false}).then(() => {
    console.log('Income table synced')
  })
  return Income;
};