'use strict';
let saving = [
   {
      name: 'First Deposit',
      amount:55.00,
      description: 'saved money from work at wendys'
   },
   {
      name:'Second Deposit',
      amount:72.00,
      description: 'saved money from mcdonalds'

   },
   {
      name:'Third Deposit',
      amount:23.00,
      description: 'saved money from grandma'

   }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var savings = saving.map(function(s) { 
      s.createdAt = new Date(), 
      s.updatedAt = new Date()
      return s 
    })
    
    return queryInterface.bulkInsert('Savings', savings, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('Savings', null, {});

  }
};